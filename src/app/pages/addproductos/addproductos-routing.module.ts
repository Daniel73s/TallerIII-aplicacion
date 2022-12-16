import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddproductosPage } from './addproductos.page';

const routes: Routes = [
  {
    path: '',
    component: AddproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddproductosPageRoutingModule {}
