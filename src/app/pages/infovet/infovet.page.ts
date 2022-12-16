import { ModpuntajePage } from './../modpuntaje/modpuntaje.page';
import { RatingService } from './../../servicios/rating.service';
import { AddpuntajePage } from './../addpuntaje/addpuntaje.page';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatalocalService } from 'src/app/servicios/datalocal.service';

import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { veterinariaInterface } from 'src/app/utils/interfaces/veterinaria.interface';
import { VeterinariasService } from '../../servicios/veterinarias.service';
import { usuarioInterface } from 'src/app/utils/interfaces/usuario.interface';
declare var mapboxgl:any;
@Component({
  selector: 'app-infovet',
  templateUrl: './infovet.page.html',
  styleUrls: ['./infovet.page.scss'],
})
export class InfovetPage implements OnInit {
  codvet:number;
  datosvet:veterinariaInterface;
  ban:boolean=false;
  Doctor:any;
  usuario: usuarioInterface;
  ratingx:any[]=[];
  puntaje:number;
  public RatingExist:number;
  constructor(private route:ActivatedRoute,
              private vet:VeterinariasService,
              private usu:UsuariosService, 
              private router:Router,
              private datalocal:DatalocalService, 
              private alertController:AlertController,
              private modalCtrl:ModalController,
              public renderer2:Renderer2,
              public _rating:RatingService) { 
     this.codvet=Number(this.route.snapshot.paramMap.get('codvet'));
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.veterinaria();
    this.datosDoctor();
    this.datalocal.getToken().then(data => {
      if (data === null) {
        this.usuario = null;
      } else {
        this.usuario = this.usu.decodificar(data);
        this._rating.ratingExist({login:this.usuario.login,codvet:this.codvet}).then((data:any)=>{
          this.RatingExist=data[0].count;
        })
      }
    });



    this.getRating(this.codvet);
  }




  veterinaria(){
     this.vet.getVetById(this.codvet).then((data:veterinariaInterface)=>{
       this.datosvet=data[0];      
       this.ban=true;
       this.inizializarMapa(this.datosvet);
     });
  }

   datosDoctor(){
     this.usu.datosPropietario(this.codvet).then((data:any)=>{
       this.Doctor=data[0];
     
       
     })
   }

  inizializarMapa(veterinaria:veterinariaInterface){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZG9naW1hcGJveCIsImEiOiJja2Nxdm5nMzEwaTNxMzBtcXczcTN2YjIxIn0.bPOJOnc186Cwld5lR_PFSw';
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [Number(veterinaria.lng),Number(veterinaria.lat)],
      zoom: 13,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
  });
  map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions:{
      enableHighAccuracy:true
    },
    trackUserLocation:true
  })
  );

  map.on('load', ()=> {
    // Redimencionar El mapa
    map.resize();

    //Marker
    const marker = new mapboxgl.Marker()
    .setLngLat([Number(veterinaria.lng),Number(veterinaria.lat)])
    .setPopup(new mapboxgl.Popup()
    .setHTML(   
      '<div style="text-align:center;">'  +
      '<img src="'+veterinaria.imagen+ '"  style="width:50px; height:50px; border-radius:100%; margin:auto; display:block;">'+
      '<small style="color: #a1a1a1;">'+ veterinaria.nombre+'</small> '+
      '</div>'
      ))
    .addTo(map);
    marker.togglePopup();
      }); 
  }
  llamar(celular){
    window.location.href="tel:"+celular;
  }

  public productos(codvet){
    this.router.navigate([`tabs/productos/${codvet}`]);
   
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Acceso Denegado',
      subHeader: '',
      message: 'inicie sesion para puntuar a las veterinarias',
      buttons: ['cerrar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

  async puntuarmodal(login:String,codvet:Number,foto:string,nombre:string,ap:string,am:string,nombrevet:string,imagen:string){
    // console.log(login,codvet);
    
   const modal= await this.modalCtrl.create({
      component:AddpuntajePage,
      componentProps:{
        login,
        codvet,
        foto,
        nombre,
        ap,
        am,
        nombrevet,
        imagen
      }

    });

    if(this.usuario){
      await modal.present();
    }else{
      this.presentAlert();
    }

    const {data}=await modal.onDidDismiss();
     if(data){
      this.getRating(this.codvet);
     }
  }

  getRating(codvet:number){
      this._rating.getRating(codvet).then((data:any)=>{
        this.ratingx=data;
        this.puntaje=this.calcularPuntaje(this.ratingx);
      });
  }

  calcularPuntaje(array:any[]){
    let p=0;
    for(let i=0;i<array.length;i++){      
        p=(p+array[i].puntaje);
      }


      if((p/array.length)){

      }
   return ((p/array.length));
   
  }


  async modificarpuntaje(login:String,codvet:Number,foto:string,nombre:string,ap:string,am:string,nombrevet:string,imagen:string){
    const modal= await this.modalCtrl.create({
      component:ModpuntajePage,
      componentProps:{
        login,
        codvet,
        foto,
        nombre,
        ap,
        am,
        nombrevet,
        imagen
      }
    });
    if(this.usuario){
      await modal.present();
    }else{
      this.presentAlert();
    }

    const {data}=await modal.onDidDismiss();
     if(data){
      this.getRating(this.codvet);
     }
    
  }
}
