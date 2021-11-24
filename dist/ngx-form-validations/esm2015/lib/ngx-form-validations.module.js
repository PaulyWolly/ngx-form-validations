import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFormValidationsControlComponent } from './Components/ngx-form-validations-control.component';
import { NgxFormValidationsErrorComponent } from './Components/ngx-form-validations-error.component';
import { NgxFormValidationsValidateComponent } from './Components/ngx-form-validations-validate.component';
import { NgxFormValidationsConfig } from './ngx-form-validations.config';
import * as i0 from "@angular/core";
export class NgxFormValidationsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm0tdmFsaWRhdGlvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZvcm0tdmFsaWRhdGlvbnMvc3JjL2xpYi9uZ3gtZm9ybS12YWxpZGF0aW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDM0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBdUJ6RSxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzBFQUF4Qix3QkFBd0I7K0VBTHhCLENBQUM7WUFDVixPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLFFBQVEsRUFBRSx3QkFBd0I7U0FDbkMsQ0FBQyxZQWJPO1lBQ1AsWUFBWTtZQUNaLHVCQUF1QjtZQUN2QixtQkFBbUI7U0FDcEI7dUZBV1Usd0JBQXdCO2NBckJwQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdDQUFnQztvQkFDaEMsbUNBQW1DO29CQUNuQyxrQ0FBa0M7aUJBQ25DO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHVCQUF1QjtvQkFDdkIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZ0NBQWdDO29CQUNoQyxtQ0FBbUM7b0JBQ25DLGtDQUFrQztpQkFDbkM7Z0JBQ0QsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLHdCQUF3Qjt3QkFDakMsUUFBUSxFQUFFLHdCQUF3QjtxQkFDbkMsQ0FBQzthQUNIOzt3RkFDWSx3QkFBd0IsbUJBbkJqQyxnQ0FBZ0M7UUFDaEMsbUNBQW1DO1FBQ25DLGtDQUFrQyxhQUdsQyxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLG1CQUFtQixhQUduQixnQ0FBZ0M7UUFDaEMsbUNBQW1DO1FBQ25DLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRpb25zQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9uZ3gtZm9ybS12YWxpZGF0aW9ucy1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0aW9uc0Vycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL25neC1mb3JtLXZhbGlkYXRpb25zLWVycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0aW9uc1ZhbGlkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL25neC1mb3JtLXZhbGlkYXRpb25zLXZhbGlkYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEZvcm1WYWxpZGF0aW9uc0NvbmZpZyB9IGZyb20gJy4vbmd4LWZvcm0tdmFsaWRhdGlvbnMuY29uZmlnJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3hGb3JtVmFsaWRhdGlvbnNFcnJvckNvbXBvbmVudCxcclxuICAgIE5neEZvcm1WYWxpZGF0aW9uc1ZhbGlkYXRlQ29tcG9uZW50LFxyXG4gICAgTmd4Rm9ybVZhbGlkYXRpb25zQ29udHJvbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmd4Rm9ybVZhbGlkYXRpb25zRXJyb3JDb21wb25lbnQsXHJcbiAgICBOZ3hGb3JtVmFsaWRhdGlvbnNWYWxpZGF0ZUNvbXBvbmVudCxcclxuICAgIE5neEZvcm1WYWxpZGF0aW9uc0NvbnRyb2xDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5neEZvcm1WYWxpZGF0aW9uc0NvbmZpZyxcclxuICAgIHVzZVZhbHVlOiBOZ3hGb3JtVmFsaWRhdGlvbnNDb25maWcsXHJcbiAgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEZvcm1WYWxpZGF0aW9uc01vZHVsZSB7IH1cclxuIl19