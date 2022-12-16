import { ProductosService } from './../../servicios/productos.service';
import { VeterinariasService } from 'src/app/servicios/veterinarias.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { veterinariaInterface } from 'src/app/utils/interfaces/veterinaria.interface';

@Component({
  selector: 'dogi-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  public codvet:number;
  public linkback:String;
  public datosvet:String;
  public linkimg:String;
  public productos:any[];
  constructor(private route:ActivatedRoute, private _vet:VeterinariasService, private _productos:ProductosService) {
    this.codvet=Number(this.route.snapshot.paramMap.get('codvet'));
    this.linkback=`/tabs/infovet/${this.codvet}`;
    
   }
  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.veterinaria();
    this.getproductos();
  }

refrescar(e){
    this._productos.listarproductosvetcliente(this.codvet).then((data:any[])=>{
      this.productos=data;
      e.target.complete();
   }
  )
  

}
  veterinaria(){
    this._vet.getVetById(this.codvet).then((data:veterinariaInterface)=>{
      this.datosvet=data[0].nombre; 
      this.linkimg=data[0].imagen;
    });
 }
 getproductos(){
   this._productos.listarproductosvetcliente(this.codvet).then((data:any[])=>{
       this.productos=data;
    }
   )
 }
 enviarmensaje(numero:Number,nombre:String){
  let link=`https://api.whatsapp.com/send?phone=${numero}&text=Me%20interesa%20su%20producto,%20${nombre}%20sigue estando disponible?`
  window.open(link); 
 }

}
