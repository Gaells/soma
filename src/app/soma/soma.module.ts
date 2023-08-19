import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './soma/soma.component';
import { SomaService } from './soma/services';



@NgModule({
  declarations: [
    SomaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SomaComponent
  ],
  providers: [
    SomaService
  ]
})
export class SomaModule { }
