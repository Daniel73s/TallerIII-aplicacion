import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModpuntajePageRoutingModule } from './modpuntaje-routing.module';

import { ModpuntajePage } from './modpuntaje.page';
import { MisdirectivasModule } from 'src/app/utils/directivas/directivas.module';
import { ComponentsModule } from './../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModpuntajePageRoutingModule,
    MisdirectivasModule,
    ComponentsModule
  ],
  declarations: [ModpuntajePage]
})
export class ModpuntajePageModule {}
