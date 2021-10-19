import { Component, OnInit } from "@angular/core";
import { HeroesService } from "./services/heroes.service";
import { tap } from "rxjs/operators";
import { iHero } from "./interface/hero.interface";
import { iComic } from "../comic/interface/comic.interface";
import { FavouritesService } from "src/app/shared/services/favoutitesService";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes!:iHero[];
  favourites$ = this.favouritesSvc.favoriteAction$;
  constructor(private heroesSvc: HeroesService, private favouritesSvc: FavouritesService) {}
  ngOnInit(): void{
    this.heroesSvc.getHeroes().pipe(
      tap((res:any) => {
        let results = res.data.results;
        this.heroes = results;
      })
    )
    .subscribe();

    this.favouritesSvc.loadFavourites();
  }

  addToFavourite(comic: iComic): void {
    this.favouritesSvc.updateFavourites(comic)
  }
}
