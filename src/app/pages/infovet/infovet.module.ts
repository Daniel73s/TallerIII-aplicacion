import { ModpuntajePageModule } from './../modpuntaje/modpuntaje.module';

import { ComponentsModule } from './../../components/components.module';
import { AddpuntajePageModule } from './../addpuntaje/addpuntaje.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfovetPageRoutingModule } from './infovet-routing.module';

import { InfovetPage } from './infovet.page';
import { MisdirectivasModule } from 'src/app/utils/directivas/directivas.module';
import { AddpuntajePage } from '../addpuntaje/addpuntaje.page';
import { ModpuntajePage } from './../modpuntaje/modpuntaje.page';

@NgModule({
  entryComponents:[
    AddpuntajePage,
    ModpuntajePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfovetPageRoutingModule,
    MisdirectivasModule,
    AddpuntajePageModule,
    ComponentsModule,
    ModpuntajePageModule
  ],
  declarations: [InfovetPage]
})
export class InfovetPageModule {}
