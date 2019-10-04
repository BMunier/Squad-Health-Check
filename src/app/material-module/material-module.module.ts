import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModuleModule { }
