import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dogi-reservasvet',
  templateUrl: './reservasvet.page.html',
  styleUrls: ['./reservasvet.page.scss'],
})
export class ReservasvetPage implements OnInit {
public estado:Boolean=false;
horas=[7,8,9,10,11,12,13,14,15,16,17,18,19,20];
minutos=[0,15,30,45];
  constructor() { }

  ngOnInit() {
    let hoy = new Date();
     let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
     console.log(hora);
     
  }

  cambiarEstado(event){
    // console.log(event.detail.checked);
    this.estado=event.detail.checked;
  }


}
