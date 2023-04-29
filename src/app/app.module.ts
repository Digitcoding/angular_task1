import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angularmaterial/angularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PracticeflexComponent } from './practiceflex/practiceflex.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from './shared/services/components/snackbar/snackbar.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PracticeflexComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
