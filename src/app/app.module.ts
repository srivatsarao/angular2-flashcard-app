import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FlashCardService } from './flashcard.service';
import { CarouselComponent } from './carousel.component';
import { PanelComponent } from './panel.component'
import { CarouselModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [FlashCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
