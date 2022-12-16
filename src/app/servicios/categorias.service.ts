import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private url:string='http://localhost:3000/categorias'

  constructor(private http:HttpClient) { }
  getcategorias(){
    return this.http.get(`${this.url}/listarcategorias`).toPromise();
  }
}
