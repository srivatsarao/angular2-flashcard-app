import { Component, Input, ViewChild } from '@angular/core';

import { CarouselComponent } from './carousel.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
   heading={
        title : 'Flash card app',  
        lessTitle:'Need help remembering things during exams? Look no further'
   }
  @ViewChild(CarouselComponent)
  private carouselComponent: CarouselComponent;

  // showPanel(){
  //   console.log(this.carouselComponent.flashCard.index);
  // } 
}
