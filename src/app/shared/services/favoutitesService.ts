import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { iComic } from "src/app/pages/comic/interface/comic.interface";

const my_favorites = "favourites";
@Injectable({
  providedIn: 'root'
})

export class FavouritesService {
  favourites!: iComic[];

  private favoriteSubject = new BehaviorSubject<iComic[]>([]);

  get favoriteAction$(): Observable<iComic[]> {
    return this.favoriteSubject.asObservable();
  }

  updateFavourites(comic:iComic): void {
    this.addToFavourite(comic);
  }

  loadFavourites(): void {
    let favouritesStorage = JSON.parse(localStorage.getItem(my_favorites)!);
    if(favouritesStorage && favouritesStorage.length > 0)
      this.favourites = favouritesStorage;
    else
      this.favourites = [];

    this.favoriteSubject.next(this.favourites); 
  }

  private addToFavourite(comic:iComic): void {
    this.favourites.push(comic);
    this.favoriteSubject.next(this.favourites);
    let favouritesStorage = JSON.parse(localStorage.getItem(my_favorites)!);
    if(favouritesStorage && favouritesStorage.length > 0){
      favouritesStorage.push(comic);
    }else{
      favouritesStorage = [comic];
    }

    localStorage.setItem(my_favorites, JSON.stringify(favouritesStorage));
  }

}