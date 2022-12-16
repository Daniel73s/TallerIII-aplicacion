import { CategoriasService } from './../../servicios/categorias.service';
import { FiltroPage } from './../filtro/filtro.page';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DatalocalService } from 'src/app/servicios/datalocal.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { usuarioInterface } from 'src/app/utils/interfaces/usuario.interface';
import { veterinariaInterface } from 'src/app/utils/interfaces/veterinaria.interface';
import { VeterinariasService } from '../../servicios/veterinarias.service';
import { ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-veterinarias',
  templateUrl: './veterinarias.page.html',
  styleUrls: ['./veterinarias.page.scss'],
})
export class VeterinariasPage implements OnInit {
public veterinarias:veterinariaInterface[];
public bandera:boolean=false;
textoBuscar:string='';
usuario:usuarioInterface;
nombreCompleto:String;
public accion:string='todos';
public categorias:any[];
  constructor(private _categoriasService:CategoriasService, private modalCtrl:ModalController, private vet:VeterinariasService,private router:Router,private datalocal:DatalocalService,private usu:UsuariosService,public toastController: ToastController) { }

  ngOnInit() {
    this.listarcategorias();
  }

  ionViewWillEnter(){
    this.getvet();
    this.datalocal.getToken().then(data=>{
      if(data===null){
        this.usuario=null;
      }else{
        this.usuario=this.usu.decodificar(data);
        
      }
    });
  }


  getvet(){
    this.vet.getVeterinarias(true).then((data:veterinariaInterface[])=>{
      this.veterinarias=data;
      this.bandera=true;
    }).catch(e=>{
       this.mensaje('error al cargar los datos');
    })
  }

  infovet(codvet:number){
    this.router.navigate([`/tabs/infovet/${codvet}`]);
  }

  buscarVet(e){
    this.textoBuscar=e.detail.value;
    this.accion='';
  }

  guardarVetEnFavoritos(veterinaria:any){
     this.datalocal.guardarVetEnFavoritos(veterinaria).then((data:any[])=>{
       this.mensaje('Se guardo en favoritos')
     })
  }
  async mensaje(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass:'animated fadeInLeft',
      position:'top'
    });
    toast.present();
  }

  llamar(celular:number){
    window.location.href=`tel:${celular}`;
  }

 async abrirmodal(){
    const modal= await this.modalCtrl.create({
      component:FiltroPage
    });
     modal.present();

     const {data}=await modal.onDidDismiss();
    //  console.log(data,'esto es lo que llega');
     
     if(data){
       this.mensaje(`se encontraron ${data.length} resultados`); 
       this.veterinarias=data;
      }else{
       this.mensaje(`No se encontraron resultados o se cerro el filtro`);
     }
  }


  filtrosimple(e:any){
    this.accion=e.detail.value;
    this.textoBuscar='';
  }

  listarcategorias(){
    this._categoriasService.getcategorias().then((data:any)=>{
      this.categorias=data;
    })
  }
}
