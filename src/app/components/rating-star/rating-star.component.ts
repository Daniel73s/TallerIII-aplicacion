import { Component, Input, ViewChild, ElementRef, Renderer2, AfterViewInit} from '@angular/core';

@Component({
  selector: 'dogi-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
})
export class RatingStarComponent implements AfterViewInit{
@Input() puntaje:number;
@ViewChild('elemento') elementox:ElementRef;
public ps=0;
// public componente:string="<ion-icon name="+"home"+"></ion-icon>"
  constructor(private renderer2:Renderer2) {}
  ngAfterViewInit() {
    this.ps=Number(this.puntaje.toString().slice(0,1));
    //  console.log(this.puntaje.toString(),'esto es del rating');
    //  console.log(this.puntaje.toString().slice(0,1),'esto es del rating');
     
    let ele=this.elementox.nativeElement;
    for(let i=0; i<this.ps;i++){
      let s=this.renderer2.createElement('i');
      this.renderer2.addClass(s,'fa-solid');
      this.renderer2.addClass(s,'fa-star');
      this.renderer2.addClass(s,'primary-color')
      this.renderer2.appendChild(ele,s);
      ele=this.elementox.nativeElement;
    }
  }
}
