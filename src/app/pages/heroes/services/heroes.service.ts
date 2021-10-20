import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { iHero } from '../interface/hero.interface';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  heroes!: iHero[];
  private heroesSubject = new BehaviorSubject<iHero[]>([]);

  get heroesAction$(): Observable<iHero[]> {
    return this.heroesSubject.asObservable();
  }

  private apiURL = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6da50ae7a4c936edc073d35e4f2348bd&hash=8f152e4ff3dada52eef532da3feadc0c&limit=100';
  constructor(private http: HttpClient) { }

  getHeroes():Observable<any[]>{
    return this.http.get<any[]>(this.apiURL);
  }

  updateHeroes(heroes:iHero[]): void {
    this.heroes = heroes;
    this.heroesSubject.next(this.heroes);
  }
}
