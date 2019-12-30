import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import './utils/array-prototypes';
import { SquareColorDirective } from './directives/square-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    HeaderComponent,
    FooterComponent,
    SquareColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
