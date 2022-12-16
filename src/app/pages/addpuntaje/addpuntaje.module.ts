import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpuntajePageRoutingModule } from './addpuntaje-routing.module';

import { AddpuntajePage } from './addpuntaje.page';
import { MisdirectivasModule } from 'src/app/utils/directivas/directivas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpuntajePageRoutingModule,
    MisdirectivasModule,
  ],
  declarations: [AddpuntajePage]
})
export class AddpuntajePageModule {}
