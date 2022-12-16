import { ProductosService } from './../../servicios/productos.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dogi-misproductos',
  templateUrl: './misproductos.page.html',
  styleUrls: ['./misproductos.page.scss'],
})
export class MisproductosPage implements OnInit {
public codvet;
public productos;
public valueSelected='todos';
  constructor(private route:ActivatedRoute,private router:Router, private _productos:ProductosService) { 
    this.codvet=this.route.snapshot.paramMap.get('codvet');
    // console.log(this.route.snapshot.paramMap.get('codvet'));
  }

  ngOnInit() {
    // this.getproductos();
  }

  ionViewWillEnter(){
    this.getproductos();
  }
editarproducto(codproducto:Number){
  this.router.navigate([`/tabs/modproductos/${codproducto}`]);
}
addproducto(){
  this.router.navigate([`/tabs/addproductos/${this.codvet}`]);
}
getproductos(){
  this._productos.getProductosVet(this.codvet).then(data=>{

    
    this.productos=data;
  })
}
cambiar(e){
  this.valueSelected=e.detail.value;
}
}
