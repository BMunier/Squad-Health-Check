import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HealthFormComponent } from './health-form/health-form.component';
import { MatSliderModule } from '@angular/material';
import { MaterialModuleModule } from './material-module/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HealthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
