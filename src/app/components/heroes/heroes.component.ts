import { Component, Input, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";
import { tap } from "rxjs/operators";
import { iHero } from "../../models/hero.interface";
import { iComic } from "../../models/comic.interface";
import { FavouritesService } from "src/app/services/favorites.service";
import { Subject } from "rxjs";
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  @Input() searchSubject!: Subject<string>;
  charactersSrc = './assets/images/characters.png';
  favouritesSrc = './assets/images/favourites.png';
  deleteSrc = './assets/images/btn-delete.png';
  heroes!:iHero[];
  heroes$ = this.heroesSvc.heroesAction$;
  favourites$ = this.favouritesSvc.favoriteAction$;
  search: string = '';
  length: number = 0;
  page: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [10, 25, 100];
  loading: boolean = true;
  constructor(private heroesSvc: HeroesService, private favouritesSvc: FavouritesService) {}
  ngOnInit(): void{
    this.heroesSvc.getHeroes().pipe(
      tap((res:any) => {
        let results = res.data.results.filter(function (data:any) {
          return data.description;
        });
        this.heroes = results;
        this.length = this.heroes.length;
        this.heroesSvc.updateHeroes(results);
        this.loading = false;
      })
    )
    .subscribe();

    this.searchSubject.subscribe((search: string) => {
      this.search = search;
    });

    this.favouritesSvc.loadFavourites();
  }

  addToFavourite(comic: iComic): void {
    if(comic){
      const { id } = comic;
      const currentFavourites =  this.favouritesSvc.getFavourites();
      let found:boolean;

      if(currentFavourites){
        found = !!currentFavourites.find((fav: iComic) => fav.id == id);
        if(!found){
          this.favouritesSvc.updateFavourites(comic);
        }
        else{
          alert("Comic has already been added");
        }
      }else{
        this.favouritesSvc.updateFavourites(comic);
      }
    }

  }

  onClickDeleteFavorite(id: number): void {
    const currentFavourites =  this.favouritesSvc.getFavourites();
    const found = currentFavourites.find((fav: iComic) => fav.id == id);

    if(found)
    this.favouritesSvc.deleteFavourite(id)
  }

  onSearchHero(search: string) {
    this.search = search;
  }

  pageEvent(e:PageEvent) {
    this.page = e.pageIndex;
    this.pageSize = e.pageSize;
  }

  onOptionsSelected(value:string): void {
    let heroes = this.heroes;
    if(value == "byName"){
      heroes = this.heroes.slice();
      heroes = heroes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    }else if(value == "byModified"){
      heroes = this.heroes.slice();
      heroes = heroes.sort((a,b) => (a.modified > b.modified) ? 1 : ((b.modified > a.modified) ? -1 : 0));
    }

    this.heroesSvc.updateHeroes(heroes);
  }

}


