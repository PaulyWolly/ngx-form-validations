import { AfterViewChecked, ElementRef, Renderer2 } from "@angular/core";
import { AbstractControl, FormGroupDirective } from "@angular/forms";
import { INgxFormValidationsError } from "../Models/ngx-form-validations-error.model";
import { NgxFormValidationsService } from "../Services/ngx-form-validations.service";
import * as i0 from "@angular/core";
export declare class NgxFormValidationsErrorComponent implements AfterViewChecked {
    private autoValidateService;
    private renderer;
    control: AbstractControl;
    private labelName;
    form: FormGroupDirective;
    private formControlInput;
    private resetFormFunc;
    canShow: boolean;
    constructor(autoValidateService: NgxFormValidationsService, renderer: Renderer2);
    convertObjectToArray(obj: {
        [x: string]: any;
    }): INgxFormValidationsError[];
    ngAfterViewChecked(): void;
    getErrorMessage(error: INgxFormValidationsError): string;
    init(form: FormGroupDirective, control: AbstractControl, labelName: string | ElementRef, formControlInput: ElementRef): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxFormValidationsErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxFormValidationsErrorComponent, "ngx-fv-error", never, {}, {}, never, never>;
}
//# sourceMappingURL=ngx-form-validations-error.component.d.ts.map