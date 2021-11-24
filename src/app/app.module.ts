import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CustomNgxFormValidationsConfig } from 'src/core/validation/custom-ngx-form-validation.config';
import { NgxFormValidationsModule } from 'ngx-form-validations';
import { NgxFormValidationsConfig } from 'ngx-form-validations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxFormValidationsModule
  ],
  providers: [{
    provide: NgxFormValidationsConfig,
    useValue: CustomNgxFormValidationsConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
