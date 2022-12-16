import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { AnunciofiltroPipe } from './anunciofiltro.pipe';
import { FiltrarproductosPipe } from './filtrarproductos.pipe';



@NgModule({
  declarations: [FiltroPipe, AnunciofiltroPipe, FiltrarproductosPipe],
  exports:[FiltroPipe,AnunciofiltroPipe,FiltrarproductosPipe]
})
export class PipesModule { }