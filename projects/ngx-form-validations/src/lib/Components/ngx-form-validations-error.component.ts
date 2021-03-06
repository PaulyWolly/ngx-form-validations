import { AfterViewChecked, Component, ElementRef, Renderer2 } from "@angular/core";
import { AbstractControl, FormGroupDirective } from "@angular/forms";
import { MatCheckbox } from "@angular/material/checkbox";
import { INgxFormValidationsError } from "../Models/ngx-form-validations-error.model";
import { NgxFormValidationsService } from "../Services/ngx-form-validations.service";

@Component({
    selector: 'ngx-fv-error',
    templateUrl: './ngx-form-validations-error.component.html',
    providers: [NgxFormValidationsService]
})
export class NgxFormValidationsErrorComponent implements AfterViewChecked {

    control: AbstractControl;
    private labelName: string | ElementRef;
    form: FormGroupDirective;
    private formControlInput: ElementRef;
    private resetFormFunc: (value?: any) => void;
    canShow: boolean = false;
    
    constructor(private autoValidateService: NgxFormValidationsService,
        private renderer: Renderer2) {
        
    }

    convertObjectToArray(obj: { [x: string]: any; }): INgxFormValidationsError[]{
        if(obj)
        {
            if(this.formControlInput){
                this.renderer.addClass(this.formControlInput.nativeElement, 'is-invalid');
                this.renderer.removeClass(this.formControlInput.nativeElement, 'is-valid');
            }

            return Object.keys(obj).map(key => ({type: key, value: obj[key]}))
        }
        
        if(this.formControlInput)
        {
            this.renderer.removeClass(this.formControlInput.nativeElement, 'is-invalid');
            this.renderer.addClass(this.formControlInput.nativeElement, 'is-valid');
        }

        return [];
    }

    ngAfterViewChecked() {
        this.canShow = true;
    }

    getErrorMessage(error: INgxFormValidationsError): string{
        let labelName = this.labelName instanceof ElementRef ? (this.labelName as ElementRef).nativeElement.innerText : this.labelName;

        return this.autoValidateService.getErrorMessage(error, labelName);
    }

    init(form: FormGroupDirective, control: AbstractControl, labelName: string | ElementRef, formControlInput: ElementRef) {
        this.control = control;
        this.labelName = labelName;       
        this.form = form;
        this.formControlInput = formControlInput;

        this.resetFormFunc = form.resetForm;
        form.resetForm = () => {
            if(this.formControlInput){
                this.renderer.removeClass(this.formControlInput.nativeElement, 'is-invalid');
                this.renderer.removeClass(this.formControlInput.nativeElement, 'is-valid');
            }
            
            this.resetFormFunc.apply(form, arguments);
        }
    }
}