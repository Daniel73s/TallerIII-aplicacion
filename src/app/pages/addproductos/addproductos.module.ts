import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddproductosPageRoutingModule } from './addproductos-routing.module';

import { AddproductosPage } from './addproductos.page';
import { MisdirectivasModule } from 'src/app/utils/directivas/directivas.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddproductosPageRoutingModule,
    ReactiveFormsModule,
    MisdirectivasModule
  ],
  declarations: [AddproductosPage]
})
export class AddproductosPageModule {}
