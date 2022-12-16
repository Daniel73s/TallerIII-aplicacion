import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasvetPageRoutingModule } from './reservasvet-routing.module';

import { ReservasvetPage } from './reservasvet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasvetPageRoutingModule
  ],
  declarations: [ReservasvetPage]
})
export class ReservasvetPageModule {}
