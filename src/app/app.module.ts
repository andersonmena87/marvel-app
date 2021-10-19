import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './pages/hero/hero.component';
import { ComicComponent } from './pages/comic/comic.component';
import { FiltroPipe } from "./pages/heroes/pipes/filtro.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    HeroComponent,
    ComicComponent,
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
