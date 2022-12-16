import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url:string="http://localhost:3000/productos"
  constructor(private http:HttpClient) { }

  getProductosVet(codvet:number){
    return this.http.get(`${this.url}/listarproductosvet/${codvet}`).toPromise();
 }
  getProductoById(codproducto:number){
      return this.http.get(`${this.url}/listarproductobyid/${codproducto}`).toPromise();
 }
 modificarEstadoproducto(producto:any){
   return this.http.put(`${this.url}/modificarestadoproducto`,producto).toPromise();
 }
 modificarproducto(producto:any){
  return this.http.put(`${this.url}/modificarproducto`,producto).toPromise();
 }
 listarproductosvetcliente(codvet:number){
  return this.http.get(`${this.url}/listarproductosvetcliente/${codvet}`).toPromise();
 }
 adicionarproducto(producto:any){
  return this.http.post(`${this.url}/adicionarproducto`,producto).toPromise();
 }
 asignarproductovet(vetpro:any){
    return this.http.post(`${this.url}/asignarproductovet`,vetpro).toPromise();
 }
}
