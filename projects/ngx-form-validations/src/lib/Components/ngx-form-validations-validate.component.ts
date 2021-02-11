import { Component, AfterContentInit, Input, ContentChild, ElementRef } from "@angular/core";
import { AbstractControl, FormGroupDirective } from "@angular/forms";
import { NgxFormValidationsErrorComponent } from "./ngx-form-validations-error.component";

@Component({
    selector: 'ngx-fv-validate',
    template: '<ng-content></ng-content>',
})
export class NgxFormValidationsValidateComponent implements AfterContentInit {

    @Input() control: AbstractControl;
    @ContentChild(NgxFormValidationsErrorComponent) private autoError: NgxFormValidationsErrorComponent;
    @ContentChild('ngxFvName') private labelName: ElementRef;
    @ContentChild('ngxFvFormControl') private formControlInput: ElementRef;

    constructor() {
        
    }

    ngAfterContentInit() {

    }

    init(form: FormGroupDirective){
        this.autoError.init(form, this.control, this.labelName, this.formControlInput);
    }
}