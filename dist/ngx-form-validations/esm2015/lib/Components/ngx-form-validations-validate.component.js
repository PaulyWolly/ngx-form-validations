import { Component, Input, ContentChild } from "@angular/core";
import { NgxFormValidationsErrorComponent } from "./ngx-form-validations-error.component";
import * as i0 from "@angular/core";
const _c0 = ["ngxFvName"];
const _c1 = ["ngxFvFormControl"];
const _c2 = ["*"];
export class NgxFormValidationsValidateComponent {
    constructor() {
    }
    init(form) {
        this.autoError.init(form, this.control, this.labelNameString || this.labelName, this.formControlInput);
    }
}
NgxFormValidationsValidateComponent.ɵfac = function NgxFormValidationsValidateComponent_Factory(t) { return new (t || NgxFormValidationsValidateComponent)(); };
NgxFormValidationsValidateComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxFormValidationsValidateComponent, selectors: [["ngx-fv-validate"]], contentQueries: function NgxFormValidationsValidateComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NgxFormValidationsErrorComponent, 5);
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
        i0.ɵɵcontentQuery(dirIndex, _c1, 5);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm0tdmFsaWRhdGlvbnMtdmFsaWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZvcm0tdmFsaWRhdGlvbnMvc3JjL2xpYi9Db21wb25lbnRzL25neC1mb3JtLXZhbGlkYXRpb25zLXZhbGlkYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7O0FBTTFGLE1BQU0sT0FBTyxtQ0FBbUM7SUFRNUM7SUFFQSxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQXdCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRyxDQUFDOztzSEFkUSxtQ0FBbUM7c0ZBQW5DLG1DQUFtQztvQ0FJOUIsZ0NBQWdDOzs7Ozs7Ozs7O1FBTm5DLGtCQUF5Qjs7dUZBRTNCLG1DQUFtQztjQUovQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDJCQUEyQjthQUN4QztzQ0FHWSxPQUFPO2tCQUFmLEtBQUs7WUFDYyxlQUFlO2tCQUFsQyxLQUFLO21CQUFDLFdBQVc7WUFDc0MsU0FBUztrQkFBaEUsWUFBWTttQkFBQyxnQ0FBZ0M7WUFDWCxTQUFTO2tCQUEzQyxZQUFZO21CQUFDLFdBQVc7WUFDaUIsZ0JBQWdCO2tCQUF6RCxZQUFZO21CQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0aW9uc0Vycm9yQ29tcG9uZW50IH0gZnJvbSBcIi4vbmd4LWZvcm0tdmFsaWRhdGlvbnMtZXJyb3IuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWZ2LXZhbGlkYXRlJyxcclxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtVmFsaWRhdGlvbnNWYWxpZGF0ZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xyXG4gICAgQElucHV0KFwibGFiZWxOYW1lXCIpIGxhYmVsTmFtZVN0cmluZzogc3RyaW5nO1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ3hGb3JtVmFsaWRhdGlvbnNFcnJvckNvbXBvbmVudCkgcHJpdmF0ZSBhdXRvRXJyb3I6IE5neEZvcm1WYWxpZGF0aW9uc0Vycm9yQ29tcG9uZW50O1xyXG4gICAgQENvbnRlbnRDaGlsZCgnbmd4RnZOYW1lJykgcHJpdmF0ZSBsYWJlbE5hbWU6IEVsZW1lbnRSZWY7XHJcbiAgICBAQ29udGVudENoaWxkKCduZ3hGdkZvcm1Db250cm9sJykgcHJpdmF0ZSBmb3JtQ29udHJvbElucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbml0KGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSl7XHJcbiAgICAgICAgdGhpcy5hdXRvRXJyb3IuaW5pdChmb3JtLCB0aGlzLmNvbnRyb2wsIHRoaXMubGFiZWxOYW1lU3RyaW5nIHx8IHRoaXMubGFiZWxOYW1lLCB0aGlzLmZvcm1Db250cm9sSW5wdXQpO1xyXG4gICAgfVxyXG59Il19