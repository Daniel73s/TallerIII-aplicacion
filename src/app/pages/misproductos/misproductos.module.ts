import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisproductosPageRoutingModule } from './misproductos-routing.module';

import { MisproductosPage } from './misproductos.page';
import { PipesModule } from 'src/app/utils/pipes/pipes.module';
import { MisdirectivasModule } from 'src/app/utils/directivas/directivas.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    MisproductosPageRoutingModule,
    MisdirectivasModule 
  ],
  declarations: [MisproductosPage]
})
export class MisproductosPageModule {}
