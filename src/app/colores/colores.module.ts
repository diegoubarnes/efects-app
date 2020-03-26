import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ColoresComponent } from './colores/colores.component';



@NgModule({
  declarations: [
    ColoresComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColoresComponent,
    ListComponent
  ]
})
export class ColoresModule { }
