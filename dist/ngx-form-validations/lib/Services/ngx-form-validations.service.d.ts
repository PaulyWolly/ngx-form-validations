import { INgxFormValidationsConfig } from "../Models/ngx-form-validations-config.model";
import { INgxFormValidationsError } from "../Models/ngx-form-validations-error.model";
import * as i0 from "@angular/core";
export declare class NgxFormValidationsService {
    private autoValidateConfig;
    constructor(autoValidateConfig: INgxFormValidationsConfig);
    getErrorMessage(error: INgxFormValidationsError, labelName: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxFormValidationsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxFormValidationsService>;
}
//# sourceMappingURL=ngx-form-validations.service.d.ts.map