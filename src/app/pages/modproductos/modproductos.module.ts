import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModproductosPageRoutingModule } from './modproductos-routing.module';

import { ModproductosPage } from './modproductos.page';
import {ReactiveFormsModule} from '@angular/forms';
import { MisdirectivasModule } from 'src/app/utils/directivas/directivas.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModproductosPageRoutingModule,
    ReactiveFormsModule,
    MisdirectivasModule
  ],
  declarations: [ModproductosPage]
})
export class ModproductosPageModule {}
