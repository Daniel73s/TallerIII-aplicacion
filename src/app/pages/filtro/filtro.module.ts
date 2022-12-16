import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroPageRoutingModule } from './filtro-routing.module';

import { FiltroPage } from './filtro.page';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FiltroPage]
})
export class FiltroPageModule {}
