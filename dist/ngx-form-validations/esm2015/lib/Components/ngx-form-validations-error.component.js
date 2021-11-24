import { Component, ElementRef } from "@angular/core";
import { NgxFormValidationsService } from "../Services/ngx-form-validations.service";
import * as i0 from "@angular/core";
import * as i1 from "../Services/ngx-form-validations.service";
import * as i2 from "@angular/common";
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
export class NgxFormValidationsErrorComponent {
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
NgxFormValidationsErrorComponent.ɵfac = function NgxFormValidationsErrorComponent_Factory(t) { return new (t || NgxFormValidationsErrorComponent)(i0.ɵɵdirectiveInject(i1.NgxFormValidationsService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
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
    }], function () { return [{ type: i1.NgxFormValidationsService }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm0tdmFsaWRhdGlvbnMtZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZvcm0tdmFsaWRhdGlvbnMvc3JjL2xpYi9Db21wb25lbnRzL25neC1mb3JtLXZhbGlkYXRpb25zLWVycm9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mb3JtLXZhbGlkYXRpb25zL3NyYy9saWIvQ29tcG9uZW50cy9uZ3gtZm9ybS12YWxpZGF0aW9ucy1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFJbkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7O0lDSGpGLDhCQUFvRjtJQUNoRixZQUNKO0lBQUEsaUJBQU07Ozs7SUFERixlQUNKO0lBREksaUVBQ0o7OztJQUhKLDZCQUEwRjtJQUN0RixnR0FFTTtJQUNWLDBCQUFlOzs7SUFIZ0MsZUFBdUM7SUFBdkMsNEVBQXVDOztBRFV0RixNQUFNLE9BQU8sZ0NBQWdDO0lBU3pDLFlBQW9CLG1CQUE4QyxFQUN0RCxRQUFtQjtRQURYLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBMkI7UUFDdEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUgvQixZQUFPLEdBQVksS0FBSyxDQUFDO0lBS3pCLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxHQUEwQjtRQUMzQyxJQUFHLEdBQUcsRUFDTjtZQUNJLElBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFDO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzlFO1lBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7U0FDckU7UUFFRCxJQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFDeEI7WUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDM0U7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxrQkFBa0I7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQStCO1FBQzNDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsU0FBd0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRS9ILE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELElBQUksQ0FBQyxJQUF3QixFQUFFLE9BQXdCLEVBQUUsU0FBOEIsRUFBRSxnQkFBNEI7UUFDakgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBRXpDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUM5RTtZQUVELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUE7SUFDTCxDQUFDOztnSEEzRFEsZ0NBQWdDO21GQUFoQyxnQ0FBZ0Msa0VBRjlCLENBQUMseUJBQXlCLENBQUM7UUNUMUMsbUdBSWU7O1FBSkEsMEdBQXlFOzt1RkRXM0UsZ0NBQWdDO2NBTDVDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLDZDQUE2QztnQkFDMUQsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdDaGVja2VkLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94XCI7XHJcbmltcG9ydCB7IElOZ3hGb3JtVmFsaWRhdGlvbnNFcnJvciB9IGZyb20gXCIuLi9Nb2RlbHMvbmd4LWZvcm0tdmFsaWRhdGlvbnMtZXJyb3IubW9kZWxcIjtcclxuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9TZXJ2aWNlcy9uZ3gtZm9ybS12YWxpZGF0aW9ucy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWZ2LWVycm9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZm9ybS12YWxpZGF0aW9ucy1lcnJvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtOZ3hGb3JtVmFsaWRhdGlvbnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVZhbGlkYXRpb25zRXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcclxuXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XHJcbiAgICBwcml2YXRlIGxhYmVsTmFtZTogc3RyaW5nIHwgRWxlbWVudFJlZjtcclxuICAgIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZTtcclxuICAgIHByaXZhdGUgZm9ybUNvbnRyb2xJbnB1dDogRWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgcmVzZXRGb3JtRnVuYzogKHZhbHVlPzogYW55KSA9PiB2b2lkO1xyXG4gICAgY2FuU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dG9WYWxpZGF0ZVNlcnZpY2U6IE5neEZvcm1WYWxpZGF0aW9uc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydE9iamVjdFRvQXJyYXkob2JqOiB7IFt4OiBzdHJpbmddOiBhbnk7IH0pOiBJTmd4Rm9ybVZhbGlkYXRpb25zRXJyb3JbXXtcclxuICAgICAgICBpZihvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmZvcm1Db250cm9sSW5wdXQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmZvcm1Db250cm9sSW5wdXQubmF0aXZlRWxlbWVudCwgJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5mb3JtQ29udHJvbElucHV0Lm5hdGl2ZUVsZW1lbnQsICdpcy12YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoa2V5ID0+ICh7dHlwZToga2V5LCB2YWx1ZTogb2JqW2tleV19KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5mb3JtQ29udHJvbElucHV0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmZvcm1Db250cm9sSW5wdXQubmF0aXZlRWxlbWVudCwgJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmZvcm1Db250cm9sSW5wdXQubmF0aXZlRWxlbWVudCwgJ2lzLXZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgICAgIHRoaXMuY2FuU2hvdyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiBJTmd4Rm9ybVZhbGlkYXRpb25zRXJyb3IpOiBzdHJpbmd7XHJcbiAgICAgICAgbGV0IGxhYmVsTmFtZSA9IHRoaXMubGFiZWxOYW1lIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/ICh0aGlzLmxhYmVsTmFtZSBhcyBFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCA6IHRoaXMubGFiZWxOYW1lO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRvVmFsaWRhdGVTZXJ2aWNlLmdldEVycm9yTWVzc2FnZShlcnJvciwgbGFiZWxOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSwgY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBsYWJlbE5hbWU6IHN0cmluZyB8IEVsZW1lbnRSZWYsIGZvcm1Db250cm9sSW5wdXQ6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xyXG4gICAgICAgIHRoaXMubGFiZWxOYW1lID0gbGFiZWxOYW1lOyAgICAgICBcclxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2xJbnB1dCA9IGZvcm1Db250cm9sSW5wdXQ7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRGb3JtRnVuYyA9IGZvcm0ucmVzZXRGb3JtO1xyXG4gICAgICAgIGZvcm0ucmVzZXRGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLmZvcm1Db250cm9sSW5wdXQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmZvcm1Db250cm9sSW5wdXQubmF0aXZlRWxlbWVudCwgJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5mb3JtQ29udHJvbElucHV0Lm5hdGl2ZUVsZW1lbnQsICdpcy12YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybUZ1bmMuYXBwbHkoZm9ybSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiY2FuU2hvdyAmJiAoKGZvcm0gJiYgZm9ybS5zdWJtaXR0ZWQpIHx8IChjb250cm9sICYmIGNvbnRyb2wuZGlydHkpKVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nRm9yPVwibGV0IGVycm9yIG9mIGNvbnZlcnRPYmplY3RUb0FycmF5KGNvbnRyb2wuZXJyb3JzKVwiPlxyXG4gICAgICAgIHt7IGdldEVycm9yTWVzc2FnZShlcnJvcikgfX1cclxuICAgIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj4iXX0=