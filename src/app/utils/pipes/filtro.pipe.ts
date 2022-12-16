import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform( arreglo: any[],texto: string,columna: string, accion:string ): any[] {
    if(accion=='todos'){
      return arreglo;
    }

    if(accion=='abierto'){
      return arreglo.filter( item => {
        return item['ac']==true;
      });
    }

    if(accion=='domicilio'){
      return arreglo.filter( item => {
        return item['atenciondom']==true;
      });
    }

    if(accion==''){
      return arreglo.filter( item => {
                return item[columna].includes( texto.toUpperCase());
        });
    }

    if(accion!='' && accion!='todos' && accion!='abierto' && accion!='domicilio'){
          return arreglo.filter( item => {
            return item['categoria'].includes( accion.toUpperCase());
          });
    }
  }

}