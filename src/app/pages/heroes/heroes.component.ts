import { Component, OnInit } from "@angular/core";
import { HeroesService } from "./services/heroes.service";
import { tap } from "rxjs/operators";
import { iHero } from "./interface/hero.interface";
import { iComic } from "../comic/interface/comic.interface";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes!:iHero[];
  favourites!:iComic[];
  constructor(private heroesSvc: HeroesService) {}
  ngOnInit(): void{
    this.heroesSvc.getHeroes().pipe(
      tap((res:any) => {
        let results = res.data.results;
        this.heroes = results;
      })
    )
    .subscribe();
  }

  addToFavourite(comic: iComic): void {
    console.log("***FAvoritos");
    console.log(comic);
    this.favourites.push(comic);
  }
}
