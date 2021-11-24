import * as i0 from '@angular/core';
import { Injectable, Inject, ElementRef, Component, Input, ContentChild, ContentChildren, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const NgxFormValidationsConfig = {
    "required": requiredConfig,
    "minlength": minlengthConfig,
    "maxlength": maxlengthConfig,
    "requiredTrue": requiredTrueConfig,
    "pattern": patternConfig,
    "email": emailConfig,
    "max": maxConfig,
    "min": minConfig
};
function requiredConfig(label) {
    return `'${label}' field is required`;
}
function minlengthConfig(label, error) {
    return `${label} field must be no longer than ${error.requiredLength} characters`;
}
function maxlengthConfig(label, error) {
    return `'${label}' field must be no longer than ${error.requiredLength} characters`;
}
function requiredTrueConfig(label) {
    return `${label} field is required`;
}
function patternConfig(label) {
    return `${label} field is invalid`;
}
function emailConfig(label) {
    return `Invalid email address`;
}
function maxConfig(label, error) {
    return `${label} field must be no greater than ${error.max}`;
}
function minConfig(label, error) {
    return `${label} field must be no less than ${error.min}`;
}

class NgxFormValidationsService {
    constructor(autoValidateConfig) {
        this.autoValidateConfig = autoValidateConfig;
    }
    getErrorMessage(error, labelName) {
        var validateConfig = this.autoValidateConfig[error.type];
        if (validateConfig)
            return this.autoValidateConfig[error.type](labelName, error.value);
        return "Not handled error";
    }
}
NgxFormValidationsService.ɵfac = function NgxFormValidationsService_Factory(t) { return new (t || NgxFormValidationsService)(i0.ɵɵinject(NgxFormValidationsConfig)); };
NgxFormValidationsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NgxFormValidationsService, factory: NgxFormValidationsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFormValidationsService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [NgxFormValidationsConfig]
            }] }]; }, null); })();

function NgxFormValidationsErrorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getErrorMessage(error_r2), " ");
} }
function NgxFormValidationsErrorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NgxFormValidationsErrorComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.convertObjectToArray(ctx_r0.control.errors));
} }
class NgxFormValidationsErrorComponent {
    constructor(autoValidateService, renderer) {
        this.autoValidateService = autoValidateService;
        this.renderer = renderer;
        this.canShow = false;
    }
    convertObjectToArray(obj) {
        if (obj) {
            if (this.formControlInput) {
                this.renderer.addClass(this.formControlInput.nativeElement, 'is-invalid');
                this.renderer.removeClass(this.formControlInput.nativeElement, 'is-valid');
            }
            return Object.keys(obj).map(key => ({ type: key, value: obj[key] }));
        }
        if (this.formControlInput) {
            this.renderer.removeClass(this.formControlInput.nativeElement, 'is-invalid');
            this.renderer.addClass(this.formControlInput.nativeElement, 'is-valid');
        }
        return [];
    }
    ngAfterViewChecked() {
        this.canShow = true;
    }
    getErrorMessage(error) {
        let labelName = this.labelName instanceof ElementRef ? this.labelName.nativeElement.innerText : this.labelName;
        return this.autoValidateService.getErrorMessage(error, labelName);
    }
    init(form, control, labelName, formControlInput) {
        this.control = control;
        this.labelName = labelName;
        this.form = form;
        this.formControlInput = formControlInput;
        this.resetFormFunc = form.resetForm;
        form.resetForm = () => {
            if (this.formControlInput) {
                this.renderer.removeClass(this.formControlInput.nativeElement, 'is-invalid');
                this.renderer.removeClass(this.formControlInput.nativeElement, 'is-valid');
            }
            this.resetFormFunc.apply(form, arguments);
        };
    }
}
NgxFormValidationsErrorComponent.ɵfac = function NgxFormValidationsErrorComponent_Factory(t) { return new (t || NgxFormValidationsErrorComponent)(i0.ɵɵdirectiveInject(NgxFormValidationsService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
NgxFormValidationsErrorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxFormValidationsErrorComponent, selectors: [["ngx-fv-error"]], features: [i0.ɵɵProvidersFeature([NgxFormValidationsService])], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "text-danger", 4, "ngFor", "ngForOf"], [1, "text-danger"]], template: function NgxFormValidationsErrorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxFormValidationsErrorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.canShow && (ctx.form && ctx.form.submitted || ctx.control && ctx.control.dirty));
    } }, directives: [i2.NgIf, i2.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFormValidationsErrorComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-fv-error',
                templateUrl: './ngx-form-validations-error.component.html',
                providers: [NgxFormValidationsService]
            }]
    }], function () { return [{ type: NgxFormValidationsService }, { type: i0.Renderer2 }]; }, null); })();

const _c0$1 = ["ngxFvName"];
const _c1$1 = ["ngxFvFormControl"];
const _c2 = ["*"];
class NgxFormValidationsValidateComponent {
    constructor() {
    }
    init(form) {
        this.autoError.init(form, this.control, this.labelNameString || this.labelName, this.formControlInput);
    }
}
NgxFormValidationsValidateComponent.ɵfac = function NgxFormValidationsValidateComponent_Factory(t) { return new (t || NgxFormValidationsValidateComponent)(); };
NgxFormValidationsValidateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxFormValidationsValidateComponent, selectors: [["ngx-fv-validate"]], contentQueries: function NgxFormValidationsValidateComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NgxFormValidationsErrorComponent, 5);
        i0.ɵɵcontentQuery(dirIndex, _c0$1, 5);
        i0.ɵɵcontentQuery(dirIndex, _c1$1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autoError = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.labelName = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.formControlInput = _t.first);
    } }, inputs: { control: "control", labelNameString: ["labelName", "labelNameString"] }, ngContentSelectors: _c2, decls: 1, vars: 0, template: function NgxFormValidationsValidateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFormValidationsValidateComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-fv-validate',
                template: '<ng-content></ng-content>',
            }]
    }], function () { return []; }, { control: [{
            type: Input
        }], labelNameString: [{
            type: Input,
            args: ["labelName"]
        }], autoError: [{
            type: ContentChild,
            args: [NgxFormValidationsErrorComponent]
        }], labelName: [{
            type: ContentChild,
            args: ['ngxFvName']
        }], formControlInput: [{
            type: ContentChild,
            args: ['ngxFvFormControl']
        }] }); })();

const _c0 = ["ngxFvControl", ""];
const _c1 = ["*"];
class NgxFormValidationsControlComponent {
    constructor() {
    }
    ngAfterContentInit() {
        if (this.autoValidateComponents && this.autoValidateComponents.length > 0) {
            this.autoValidateComponents.forEach(avc => avc.init(this.ngxFvControl));
        }
    }
}
NgxFormValidationsControlComponent.ɵfac = function NgxFormValidationsControlComponent_Factory(t) { return new (t || NgxFormValidationsControlComponent)(); };
NgxFormValidationsControlComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxFormValidationsControlComponent, selectors: [["", "ngxFvControl", ""]], contentQueries: function NgxFormValidationsControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NgxFormValidationsValidateComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autoValidateComponents = _t);
    } }, inputs: { ngxFvControl: "ngxFvControl" }, attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function NgxFormValidationsControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFormValidationsControlComponent, [{
        type: Component,
        args: [{
                selector: '[ngxFvControl]',
                template: '<ng-content></ng-content>',
            }]
    }], function () { return []; }, { ngxFvControl: [{
            type: Input
        }], autoValidateComponents: [{
            type: ContentChildren,
            args: [NgxFormValidationsValidateComponent, { descendants: true }]
        }] }); })();

class NgxFormValidationsModule {
}
NgxFormValidationsModule.ɵfac = function NgxFormValidationsModule_Factory(t) { return new (t || NgxFormValidationsModule)(); };
NgxFormValidationsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxFormValidationsModule });
NgxFormValidationsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [{
            provide: NgxFormValidationsConfig,
            useValue: NgxFormValidationsConfig,
        }], imports: [[
            CommonModule,
            BrowserAnimationsModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFormValidationsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgxFormValidationsErrorComponent,
                    NgxFormValidationsValidateComponent,
                    NgxFormValidationsControlComponent
                ],
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule,
                ],
                exports: [
                    NgxFormValidationsErrorComponent,
                    NgxFormValidationsValidateComponent,
                    NgxFormValidationsControlComponent
                ],
                providers: [{
                        provide: NgxFormValidationsConfig,
                        useValue: NgxFormValidationsConfig,
                    }]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxFormValidationsModule, { declarations: [NgxFormValidationsErrorComponent,
        NgxFormValidationsValidateComponent,
        NgxFormValidationsControlComponent], imports: [CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule], exports: [NgxFormValidationsErrorComponent,
        NgxFormValidationsValidateComponent,
        NgxFormValidationsControlComponent] }); })();

/*
 * Public API Surface of ngx-form-validation
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxFormValidationsConfig, NgxFormValidationsControlComponent, NgxFormValidationsErrorComponent, NgxFormValidationsModule, NgxFormValidationsValidateComponent, emailConfig, maxConfig, maxlengthConfig, minConfig, minlengthConfig, patternConfig, requiredConfig, requiredTrueConfig };
//# sourceMappingURL=ngx-form-validations.js.map
