import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarproductos'
})
export class FiltrarproductosPipe implements PipeTransform {
  transform( arreglo: any[],estado: string,columna: string ): any[] {
    if ( estado === 'todos' ) {
        return arreglo;
       }
    return arreglo.filter( item => {
                          if(estado=='true'){
                            return item[columna]==true;
                          }else{
                            return item[columna]==false;
                          }
                    });

     }

}
