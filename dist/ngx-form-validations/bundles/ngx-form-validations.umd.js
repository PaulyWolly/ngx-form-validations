(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('ngx-form-validations', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/platform-browser/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-form-validations'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.ng.platformBrowser.animations));
}(this, (function (exports, i0, i2, forms, animations) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    var NgxFormValidationsConfig = {
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
        return "'" + label + "' field is required";
    }
    function minlengthConfig(label, error) {
        return label + " field must be no longer than " + error.requiredLength + " characters";
    }
    function maxlengthConfig(label, error) {
        return "'" + label + "' field must be no longer than " + error.requiredLength + " characters";
    }
    function requiredTrueConfig(label) {
        return label + " field is required";
    }
    function patternConfig(label) {
        return label + " field is invalid";
    }
    function emailConfig(label) {
        return "Invalid email address";
    }
    function maxConfig(label, error) {
        return label + " field must be no greater than " + error.max;
    }
    function minConfig(label, error) {
        return label + " field must be no less than " + error.min;
    }

    var NgxFormValidationsService = /** @class */ (function () {
        function NgxFormValidationsService(autoValidateConfig) {
            this.autoValidateConfig = autoValidateConfig;
        }
        NgxFormValidationsService.prototype.getErrorMessage = function (error, labelName) {
            var validateConfig = this.autoValidateConfig[error.type];
            if (validateConfig)
                return this.autoValidateConfig[error.type](labelName, error.value);
            return "Not handled error";
        };
        return NgxFormValidationsService;
    }());
    NgxFormValidationsService.ɵfac = function NgxFormValidationsService_Factory(t) { return new (t || NgxFormValidationsService)(i0__namespace.ɵɵinject(NgxFormValidationsConfig)); };
    NgxFormValidationsService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: NgxFormValidationsService, factory: NgxFormValidationsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxFormValidationsService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [NgxFormValidationsConfig]
                        }] }];
        }, null);
    })();

    function NgxFormValidationsErrorComponent_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var error_r2 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.getErrorMessage(error_r2), " ");
        }
    }
    function NgxFormValidationsErrorComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, NgxFormValidationsErrorComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.convertObjectToArray(ctx_r0.control.errors));
        }
    }
    var NgxFormValidationsErrorComponent = /** @class */ (function () {
        function NgxFormValidationsErrorComponent(autoValidateService, renderer) {
            this.autoValidateService = autoValidateService;
            this.renderer = renderer;
            this.canShow = false;
        }
        NgxFormValidationsErrorComponent.prototype.convertObjectToArray = function (obj) {
            if (obj) {
                if (this.formControlInput) {
                    this.renderer.addClass(this.formControlInput.nativeElement, 'is-invalid');
                    this.renderer.removeClass(this.formControlInput.nativeElement, 'is-valid');
                }
                return Object.keys(obj).map(function (key) { return ({ type: key, value: obj[key] }); });
            }
            if (this.formControlInput) {
                this.renderer.removeClass(this.formControlInput.nativeElement, 'is-invalid');
                this.renderer.addClass(this.formControlInput.nativeElement, 'is-valid');
            }
            return [];
        };
        NgxFormValidationsErrorComponent.prototype.ngAfterViewChecked = function () {
            this.canShow = true;
        };
        NgxFormValidationsErrorComponent.prototype.getErrorMessage = function (error) {
            var labelName = this.labelName instanceof i0.ElementRef ? this.labelName.nativeElement.innerText : this.labelName;
            return this.autoValidateService.getErrorMessage(error, labelName);
        };
        NgxFormValidationsErrorComponent.prototype.init = function (form, control, labelName, formControlInput) {
            var _this = this;
            this.control = control;
            this.labelName = labelName;
            this.form = form;
            this.formControlInput = formControlInput;
            this.resetFormFunc = form.resetForm;
            form.resetForm = function () {
                if (_this.formControlInput) {
                    _this.renderer.removeClass(_this.formControlInput.nativeElement, 'is-invalid');
                    _this.renderer.removeClass(_this.formControlInput.nativeElement, 'is-valid');
                }
                _this.resetFormFunc.apply(form, arguments);
            };
        };
        return NgxFormValidationsErrorComponent;
    }());
    NgxFormValidationsErrorComponent.ɵfac = function NgxFormValidationsErrorComponent_Factory(t) { return new (t || NgxFormValidationsErrorComponent)(i0__namespace.ɵɵdirectiveInject(NgxFormValidationsService), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    NgxFormValidationsErrorComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NgxFormValidationsErrorComponent, selectors: [["ngx-fv-error"]], features: [i0__namespace.ɵɵProvidersFeature([NgxFormValidationsService])], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "text-danger", 4, "ngFor", "ngForOf"], [1, "text-danger"]], template: function NgxFormValidationsErrorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, NgxFormValidationsErrorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.canShow && (ctx.form && ctx.form.submitted || ctx.control && ctx.control.dirty));
            }
        }, directives: [i2__namespace.NgIf, i2__namespace.NgForOf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxFormValidationsErrorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-fv-error',
                        templateUrl: './ngx-form-validations-error.component.html',
                        providers: [NgxFormValidationsService]
                    }]
            }], function () { return [{ type: NgxFormValidationsService }, { type: i0__namespace.Renderer2 }]; }, null);
    })();

    var _c0$1 = ["ngxFvName"];
    var _c1$1 = ["ngxFvFormControl"];
    var _c2 = ["*"];
    var NgxFormValidationsValidateComponent = /** @class */ (function () {
        function NgxFormValidationsValidateComponent() {
        }
        NgxFormValidationsValidateComponent.prototype.init = function (form) {
            this.autoError.init(form, this.control, this.labelNameString || this.labelName, this.formControlInput);
        };
        return NgxFormValidationsValidateComponent;
    }());
    NgxFormValidationsValidateComponent.ɵfac = function NgxFormValidationsValidateComponent_Factory(t) { return new (t || NgxFormValidationsValidateComponent)(); };
    NgxFormValidationsValidateComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NgxFormValidationsValidateComponent, selectors: [["ngx-fv-validate"]], contentQueries: function NgxFormValidationsValidateComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0__namespace.ɵɵcontentQuery(dirIndex, NgxFormValidationsErrorComponent, 5);
                i0__namespace.ɵɵcontentQuery(dirIndex, _c0$1, 5);
                i0__namespace.ɵɵcontentQuery(dirIndex, _c1$1, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.autoError = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.labelName = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.formControlInput = _t.first);
            }
        }, inputs: { control: "control", labelNameString: ["labelName", "labelNameString"] }, ngContentSelectors: _c2, decls: 1, vars: 0, template: function NgxFormValidationsValidateComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵprojection(0);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxFormValidationsValidateComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-fv-validate',
                        template: '<ng-content></ng-content>',
                    }]
            }], function () { return []; }, { control: [{
                    type: i0.Input
                }], labelNameString: [{
                    type: i0.Input,
                    args: ["labelName"]
                }], autoError: [{
                    type: i0.ContentChild,
                    args: [NgxFormValidationsErrorComponent]
                }], labelName: [{
                    type: i0.ContentChild,
                    args: ['ngxFvName']
                }], formControlInput: [{
                    type: i0.ContentChild,
                    args: ['ngxFvFormControl']
                }] });
    })();

    var _c0 = ["ngxFvControl", ""];
    var _c1 = ["*"];
    var NgxFormValidationsControlComponent = /** @class */ (function () {
        function NgxFormValidationsControlComponent() {
        }
        NgxFormValidationsControlComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.autoValidateComponents && this.autoValidateComponents.length > 0) {
                this.autoValidateComponents.forEach(function (avc) { return avc.init(_this.ngxFvControl); });
            }
        };
        return NgxFormValidationsControlComponent;
    }());
    NgxFormValidationsControlComponent.ɵfac = function NgxFormValidationsControlComponent_Factory(t) { return new (t || NgxFormValidationsControlComponent)(); };
    NgxFormValidationsControlComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NgxFormValidationsControlComponent, selectors: [["", "ngxFvControl", ""]], contentQueries: function NgxFormValidationsControlComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0__namespace.ɵɵcontentQuery(dirIndex, NgxFormValidationsValidateComponent, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.autoValidateComponents = _t);
            }
        }, inputs: { ngxFvControl: "ngxFvControl" }, attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function NgxFormValidationsControlComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵprojection(0);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxFormValidationsControlComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[ngxFvControl]',
                        template: '<ng-content></ng-content>',
                    }]
            }], function () { return []; }, { ngxFvControl: [{
                    type: i0.Input
                }], autoValidateComponents: [{
                    type: i0.ContentChildren,
                    args: [NgxFormValidationsValidateComponent, { descendants: true }]
                }] });
    })();

    var NgxFormValidationsModule = /** @class */ (function () {
        function NgxFormValidationsModule() {
        }
        return NgxFormValidationsModule;
    }());
    NgxFormValidationsModule.ɵfac = function NgxFormValidationsModule_Factory(t) { return new (t || NgxFormValidationsModule)(); };
    NgxFormValidationsModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: NgxFormValidationsModule });
    NgxFormValidationsModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [{
                provide: NgxFormValidationsConfig,
                useValue: NgxFormValidationsConfig,
            }], imports: [[
                i2.CommonModule,
                animations.BrowserAnimationsModule,
                forms.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxFormValidationsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NgxFormValidationsErrorComponent,
                            NgxFormValidationsValidateComponent,
                            NgxFormValidationsControlComponent
                        ],
                        imports: [
                            i2.CommonModule,
                            animations.BrowserAnimationsModule,
                            forms.ReactiveFormsModule,
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
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NgxFormValidationsModule, { declarations: [NgxFormValidationsErrorComponent,
                NgxFormValidationsValidateComponent,
                NgxFormValidationsControlComponent], imports: [i2.CommonModule,
                animations.BrowserAnimationsModule,
                forms.ReactiveFormsModule], exports: [NgxFormValidationsErrorComponent,
                NgxFormValidationsValidateComponent,
                NgxFormValidationsControlComponent] });
    })();

    /*
     * Public API Surface of ngx-form-validation
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxFormValidationsConfig = NgxFormValidationsConfig;
    exports.NgxFormValidationsControlComponent = NgxFormValidationsControlComponent;
    exports.NgxFormValidationsErrorComponent = NgxFormValidationsErrorComponent;
    exports.NgxFormValidationsModule = NgxFormValidationsModule;
    exports.NgxFormValidationsValidateComponent = NgxFormValidationsValidateComponent;
    exports.emailConfig = emailConfig;
    exports.maxConfig = maxConfig;
    exports.maxlengthConfig = maxlengthConfig;
    exports.minConfig = minConfig;
    exports.minlengthConfig = minlengthConfig;
    exports.patternConfig = patternConfig;
    exports.requiredConfig = requiredConfig;
    exports.requiredTrueConfig = requiredTrueConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-form-validations.umd.js.map
