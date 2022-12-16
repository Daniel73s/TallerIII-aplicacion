import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from './../../servicios/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'dogi-modproductos',
  templateUrl: './modproductos.page.html',
  styleUrls: ['./modproductos.page.scss'],
})
export class ModproductosPage implements OnInit {
private codproducto:number;
public producto;
public linkback:string;
private fechamod = new Date(); 
formod:FormGroup;

public uploadPercent: Observable<number>;
public urlImage: Observable<string>;
@ViewChild('ImageProducto') ImageProducto: ElementRef;

  constructor(private storage: AngularFireStorage,
              private router:Router, 
              private fb:FormBuilder, 
              private route:ActivatedRoute, 
              private _productoservice:ProductosService,
              public toastController: ToastController) { 
    this.codproducto=Number(this.route.snapshot.paramMap.get('codproducto'));
  }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.createForm();
    this.getdatosproducto();
  }

  createForm(){
    this.formod=this.fb.group({
        nombre:['',[Validators.required,Validators.minLength(4)]],
        precio:['',[Validators.required]],
        descripcion:['',[Validators.required,Validators.maxLength(250)]],
        cantidad:['',[Validators.required]],
        umedida:['',[Validators.required]]
    });
  }
  getdatosproducto(){
    this._productoservice.getProductoById(this.codproducto).then(data=>{
      this.producto=data[0];
      this.linkback=`/tabs/misproductos/${this.producto['codvet']}`;
      this.formod.patchValue({
        nombre:this.producto.nombre,
        precio:this.producto.precio,
        descripcion:this.producto.descripcion,
        cantidad:this.producto.cantidad,
        umedida:this.producto.umedida
      })
    })
    
  }

  
  modificar(){
    let producto=this.formod.value;
    let imagen=this.ImageProducto.nativeElement.value;
    producto.codproducto=this.codproducto;
    producto.fechamod=this.fechamod;
    if(!imagen){
      producto.imagen=this.producto.imagen;
    }else{
      producto.imagen=imagen;
    }

    
    this._productoservice.modificarproducto(producto).then((data:any)=>{
      this.mensaje(data.mensaje);
      this.router.navigate([this.linkback]);
    }).catch(e=>{
        console.log(e.messaje);
    })
  }
  cambiarEstadoProducto(e,codproducto){
    let estado=e.detail.checked;
    this._productoservice.modificarEstadoproducto({estado,codproducto}).then((data:any)=>{
      this.mensaje(data.mensaje);
    })
  }

  private async mensaje(texto:string) {
      const toast = await this.toastController.create({
        message: texto,
        duration: 2000
      });
      toast.present();
  }
    // //Subir imagen a firebase
    uploadFile(event) {
      if ((event.target.files[0].size / 1024) > 3000) {
        this.mensaje('Imagen Demaciado grande');
        return
      } else {
        const id = Math.random().toString(36).substring(2);
        const file = event.target.files[0];
        const filePath = `/productos/img_${id}`;
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(finalize(() =>
          this.urlImage = ref.getDownloadURL()
        )).subscribe();
      }
    }
}
