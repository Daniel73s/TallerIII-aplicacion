import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ProductosService } from './../../servicios/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dogi-addproductos',
  templateUrl: './addproductos.page.html',
  styleUrls: ['./addproductos.page.scss'],
})
export class AddproductosPage implements OnInit {
public formulario:FormGroup;
private fecha=new Date();
public codvet;
public uploadPercent: Observable<number>;
public urlImage: Observable<string>;
@ViewChild('ImageProducto') ImageProducto: ElementRef;

public imagenDefault:String="https://firebasestorage.googleapis.com/v0/b/talleriii-4de86.appspot.com/o/productos%2Fdefault.jpg?alt=media&token=9096678b-a70c-4a5b-9bf2-c3bdab21e397";
  constructor(private fb:FormBuilder,
              private _productoService:ProductosService,
              private storage: AngularFireStorage,
              public toastController: ToastController,
              private route:ActivatedRoute,
              private router:Router) { 
    this.codvet=this.route.snapshot.paramMap.get('codvet');
  }

  ngOnInit() {
    this.createform();
  }


 private createform(){
    this.formulario=this.fb.group({
      nombre:['',[Validators.required]],
      precio:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      peso:['',[Validators.required]],
      umedida:['',[Validators.required]],
    })
  }

  agregar(){
    let producto=this.formulario.value;
    let imagen=this.ImageProducto.nativeElement.value;
    producto.fecha=this.fecha;
    if(imagen){
        producto.imagen=imagen
    }else{
      producto.imagen=this.imagenDefault;
    }
    console.log(this.formulario.value);
    this._productoService.adicionarproducto(producto).then((data:any)=>{
      const codproducto=data[0].codproducto;
        const vetproducto={
          codvet:this.codvet,
          codproducto:codproducto
        }
        return this._productoService.asignarproductovet(vetproducto).then((data:any)=>{
          this.mensaje(data.mensaje);
          this.router.navigate([`/tabs/misproductos/${this.codvet}`]);
   })
    })
    this.formulario.reset();
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
      private async mensaje(texto:string) {
        const toast = await this.toastController.create({
          message: texto,
          duration: 2000
        });
        toast.present();
    }
}
