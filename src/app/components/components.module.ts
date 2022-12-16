import { RatingStarComponent } from './rating-star/rating-star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    MenuComponent,
    RatingStarComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    MenuComponent,
    RatingStarComponent
  ]
})
export class ComponentsModule { }
