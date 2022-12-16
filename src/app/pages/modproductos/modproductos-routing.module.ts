import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModproductosPage } from './modproductos.page';

const routes: Routes = [
  {
    path: '',
    component: ModproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModproductosPageRoutingModule {}
