import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasvetPage } from './reservasvet.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasvetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasvetPageRoutingModule {}
