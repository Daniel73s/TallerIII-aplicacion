import { RatingService } from './../../servicios/rating.service';
import { VeterinariasService } from 'src/app/servicios/veterinarias.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from './../../servicios/categorias.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dogi-filtro',
  templateUrl: './filtro.page.html',
  styleUrls: ['./filtro.page.scss'],
})
export class FiltroPage implements OnInit {
  public categorias:any[]=[];
  public veterinariasfiltradas:any[]=[];
  public formFiltro:FormGroup;
  constructor(private _rating:RatingService, private modalCtrl:ModalController, private _Categorias:CategoriasService, public fb:FormBuilder, private _veterinariasService:VeterinariasService) {
  }
  
  ngOnInit() {
    this.getCategorias();
    this.generarFormulario();
  }

  cancelar(){
      this.modalCtrl.dismiss();
  }

  getCategorias(){
    this._Categorias.getcategorias().then((data:any)=>{
      this.categorias=data;
    })
  }

  generarFormulario(){
    this.formFiltro=this.fb.group({
      adom:[true,[]],
      ac:[true,[]],
      categoria:['',[Validators.required]]
    });
  }

  filtrar(){
    let vet=this.formFiltro.value;
    vet.estado=true;
    this._veterinariasService.filtrarvet(vet).then((data:any)=>{
      this.veterinariasfiltradas=data;
        this.modalCtrl.dismiss(this.veterinariasfiltradas);
      })
    }
  }


