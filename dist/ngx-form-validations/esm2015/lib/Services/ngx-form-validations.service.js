import { Inject, Injectable } from "@angular/core";
import { NgxFormValidationsConfig } from "../ngx-form-validations.config";
import * as i0 from "@angular/core";
export class NgxFormValidationsService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm0tdmFsaWRhdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mb3JtLXZhbGlkYXRpb25zL3NyYy9saWIvU2VydmljZXMvbmd4LWZvcm0tdmFsaWRhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFHMUUsTUFBTSxPQUFPLHlCQUF5QjtJQUVsQyxZQUFzRCxrQkFBNkM7UUFBN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEyQjtJQUVuRyxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQStCLEVBQUUsU0FBaUI7UUFDOUQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFHLGNBQWM7WUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2RSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7O2tHQVpRLHlCQUF5QixjQUVkLHdCQUF3QjsrRUFGbkMseUJBQXlCLFdBQXpCLHlCQUF5Qjt1RkFBekIseUJBQXlCO2NBRHJDLFVBQVU7O3NCQUdNLE1BQU07dUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSU5neEZvcm1WYWxpZGF0aW9uc0NvbmZpZyB9IGZyb20gXCIuLi9Nb2RlbHMvbmd4LWZvcm0tdmFsaWRhdGlvbnMtY29uZmlnLm1vZGVsXCI7XHJcbmltcG9ydCB7IElOZ3hGb3JtVmFsaWRhdGlvbnNFcnJvciB9IGZyb20gXCIuLi9Nb2RlbHMvbmd4LWZvcm0tdmFsaWRhdGlvbnMtZXJyb3IubW9kZWxcIjtcclxuaW1wb3J0IHsgTmd4Rm9ybVZhbGlkYXRpb25zQ29uZmlnIH0gZnJvbSBcIi4uL25neC1mb3JtLXZhbGlkYXRpb25zLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVZhbGlkYXRpb25zU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChOZ3hGb3JtVmFsaWRhdGlvbnNDb25maWcpIHByaXZhdGUgYXV0b1ZhbGlkYXRlQ29uZmlnOiBJTmd4Rm9ybVZhbGlkYXRpb25zQ29uZmlnKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiBJTmd4Rm9ybVZhbGlkYXRpb25zRXJyb3IsIGxhYmVsTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgdmFsaWRhdGVDb25maWcgPSB0aGlzLmF1dG9WYWxpZGF0ZUNvbmZpZ1tlcnJvci50eXBlXTtcclxuICAgICAgICBpZih2YWxpZGF0ZUNvbmZpZylcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b1ZhbGlkYXRlQ29uZmlnW2Vycm9yLnR5cGVdKGxhYmVsTmFtZSwgZXJyb3IudmFsdWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBcIk5vdCBoYW5kbGVkIGVycm9yXCI7XHJcbiAgICB9XHJcblxyXG59Il19