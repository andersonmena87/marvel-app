import { Component, Input, OnInit } from "@angular/core";
import { HeroesService } from "./services/heroes.service";
import { tap } from "rxjs/operators";
import { iHero } from "./interface/hero.interface";
import { iComic } from "../comic/interface/comic.interface";
import { FavouritesService } from "src/app/shared/services/favoutitesService";
import { Subject } from "rxjs";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  @Input() searchSubject!: Subject<string>;
  charactersSrc = './assets/images/characters.png';
  heroes!:iHero[];
  favourites$ = this.favouritesSvc.favoriteAction$;
  search: string = '';
  constructor(private heroesSvc: HeroesService, private favouritesSvc: FavouritesService) {}
  ngOnInit(): void{
    this.heroesSvc.getHeroes().pipe(
      tap((res:any) => {
        let results = res.data.results;
        this.heroes = results;
      })
    )
    .subscribe();

    this.searchSubject.subscribe((search: string) => {
      this.search = search;
    });  

    this.favouritesSvc.loadFavourites();
  }

  addToFavourite(comic: iComic): void {
    const { id } = comic;
    const currentFavourites =  this.favouritesSvc.getFavourites();
    const found = !!currentFavourites.find((fav: iComic) => fav.id == id);
    if(comic){
      if(!found)
      this.favouritesSvc.updateFavourites(comic)
      else
      alert("Comic has already been added")
    }
  }

  onSearchHero(search: any) {
    this.search = search;
  }

}
