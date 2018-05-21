import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WizardFormComponent } from './wizard-form/wizard-form.component';


@NgModule({
  declarations: [
    AppComponent,
    WizardFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
