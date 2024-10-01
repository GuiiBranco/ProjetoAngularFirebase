import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
