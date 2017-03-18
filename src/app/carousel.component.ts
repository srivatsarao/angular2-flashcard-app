import { Component, Input } from '@angular/core';

import { FlashCardService } from './flashcard.service'

@Component({
    selector: 'carousel-content',
    templateUrl: './carousel.component.html',
    styleUrls:['./app.component.css']
})

export class CarouselComponent {
    public show:boolean = true;
    private currIndex: number = 0;
    private current= [];
    @Input() index: number;
    @Input('master') flashCard:any [];
    cardData={
        strQn:'Question',
        strAns:'Answer'
    }

    constructor(private flashCardService: FlashCardService){
    this.flashCard=flashCardService.getQnAns();
  }
  
  getCurrActive(index){

      if(this.flashCard[index].isActive != this.show)
    return true;
  }

  showPanel(type){
      if(type=='next' && this.currIndex!=this.flashCard.length-1){
        this.flashCard[this.currIndex].isActive=false;
        this.flashCard[this.currIndex+1].isActive=true;
        this.currIndex+=1;
      }
      else if(this.currIndex>0 && type=='prev')
      {
        this.flashCard[this.currIndex].isActive=false;
        this.flashCard[this.currIndex-1].isActive=true;
        this.currIndex-=1;
      }
  }
}