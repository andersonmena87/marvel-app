import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './moduls/material.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';
import { ComicComponent } from './components/comic/comic.component';
import { FiltroPipe } from "./pipes/filtro.pipe";
import { HeroDetailComponent } from './components/heroDetail/heroDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    HeroComponent,
    ComicComponent,
    HeroDetailComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
