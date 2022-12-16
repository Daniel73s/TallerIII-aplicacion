import { Router } from '@angular/router';
import { RatingService } from './../../servicios/rating.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dogi-modpuntaje',
  templateUrl: './modpuntaje.page.html',
  styleUrls: ['./modpuntaje.page.scss'],
})
export class ModpuntajePage implements OnInit {
  @Input() login:string;
  @Input() codvet:number;
  @Input() foto:string;
  @Input() nombre:string;
  @Input() ap:string;
  @Input() am:string;
  @Input() nombrevet:string;
  @Input() imagen:string;
  public puntaje:Number=0;
  public comentario:String='';
  public rating;
  private fecha= new Date();
  private estado:boolean;
  constructor(private modal:ModalController, private _ratingService:RatingService,private toastController:ToastController) { }

  ngOnInit() {
    this.getratinguser({login:this.login.toString(),codvet:this.codvet.toString()});
  }


  cancelar(){
    this.modal.dismiss({
      data:false
    });
  }

  public estrellas(e:any){
    this.puntaje=e.target.attributes.value.value;
  }

  public getratinguser(ratinguser:any){
    this._ratingService.listarRatingById(ratinguser).then((data:any)=>{
       this.rating=data[0]; 
       this.comentario=this.rating.comentario;
       this.puntaje=this.rating.puntaje;
       this.estado=this.rating.estado;
    });
  }

  public modificarRating(){
    let rating={
      puntaje:this.puntaje,
      comentario:this.comentario,
      login:this.login.toString(),
      codvet:this.codvet.toString(),
      fecha:this.fecha,
      estado:this.estado
    }
    console.log(rating);
    this._ratingService.modrating(rating).then((data:any)=>{
      this.mensaje(data.mensaje);
      this.modal.dismiss({
        data:true
      });
      
    })
    
  }

  private async mensaje(texto:string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
}

 cambiarestadorating(e:any){
   this.estado=e.detail.checked;
 }
}
