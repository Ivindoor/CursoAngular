import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BackgroundComponent } from './background/background.component';
import { ButtonHelpComponent } from './heroes/button-help/button-help.component';
import { SliderComponent } from './heroes/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    BackgroundComponent,
    ButtonHelpComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
