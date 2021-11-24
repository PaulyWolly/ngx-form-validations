import { Component, ContentChildren, Input } from "@angular/core";
import { NgxFormValidationsValidateComponent } from "./ngx-form-validations-validate.component";
import * as i0 from "@angular/core";
const _c0 = ["ngxFvControl", ""];
const _c1 = ["*"];
export class NgxFormValidationsControlComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm0tdmFsaWRhdGlvbnMtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZm9ybS12YWxpZGF0aW9ucy9zcmMvbGliL0NvbXBvbmVudHMvbmd4LWZvcm0tdmFsaWRhdGlvbnMtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQU1oRyxNQUFNLE9BQU8sa0NBQWtDO0lBSzNDO0lBRUEsQ0FBQztJQUVELGtCQUFrQjtRQUNkLElBQUcsSUFBSSxDQUFDLHNCQUFzQixJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQ3JFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1NBQzFFO0lBQ0wsQ0FBQzs7b0hBYlEsa0NBQWtDO3FGQUFsQyxrQ0FBa0M7b0NBRzFCLG1DQUFtQzs7Ozs7O1FBTHpDLGtCQUF5Qjs7dUZBRTNCLGtDQUFrQztjQUo5QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjthQUN4QztzQ0FHWSxZQUFZO2tCQUFwQixLQUFLO1lBQytFLHNCQUFzQjtrQkFBMUcsZUFBZTttQkFBQyxtQ0FBbUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRpb25zVmFsaWRhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9uZ3gtZm9ybS12YWxpZGF0aW9ucy12YWxpZGF0ZS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdbbmd4RnZDb250cm9sXScsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVZhbGlkYXRpb25zQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIG5neEZ2Q29udHJvbDogRm9ybUdyb3VwRGlyZWN0aXZlO1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihOZ3hGb3JtVmFsaWRhdGlvbnNWYWxpZGF0ZUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBwcml2YXRlIGF1dG9WYWxpZGF0ZUNvbXBvbmVudHM6IE5neEZvcm1WYWxpZGF0aW9uc1ZhbGlkYXRlQ29tcG9uZW50W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgICAgIGlmKHRoaXMuYXV0b1ZhbGlkYXRlQ29tcG9uZW50cyAmJiB0aGlzLmF1dG9WYWxpZGF0ZUNvbXBvbmVudHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b1ZhbGlkYXRlQ29tcG9uZW50cy5mb3JFYWNoKGF2YyA9PiBhdmMuaW5pdCh0aGlzLm5neEZ2Q29udHJvbCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19