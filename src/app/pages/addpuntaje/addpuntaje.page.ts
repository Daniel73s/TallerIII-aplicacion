import { RatingService } from './../../servicios/rating.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dogi-addpuntaje',
  templateUrl: './addpuntaje.page.html',
  styleUrls: ['./addpuntaje.page.scss'],
})
export class AddpuntajePage implements OnInit {
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
private fecha= new Date();
@ViewChild('veterinaria') codveterinaria: ElementRef;
@ViewChild('usuario') userlogin: ElementRef;
  constructor(private modalCtrl:ModalController,private _ratingService:RatingService,private toastController:ToastController,private router:Router) { 

  }

  ngOnInit() {
  }

  cancelar(){
    this.modalCtrl.dismiss({data:false});
  }

 public estrellas(e:any){
    this.puntaje=e.target.attributes.value.value;
    // console.log(this.puntaje);
  }

  puntuar(){
      let rating={
        puntaje:this.puntaje,
        comentario:this.comentario,
        login:this.userlogin.nativeElement.value,
        codvet:this.codveterinaria.nativeElement.value,
        fecha:this.fecha
      }
      this._ratingService.addrating(rating).then((data:any)=>{
        this.mensaje(data.mensaje);
        this.modalCtrl.dismiss({
          data:true
        });
        this.router.navigate([`/tabs/infovet/${this.codvet.toString()}`])
      }).catch(e=>{
        this.mensaje('ocurrio un error inesperado');
        console.log(e.messaje);
      })
      
  }
  private async mensaje(texto:string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000
    });
    toast.present();
}
}
