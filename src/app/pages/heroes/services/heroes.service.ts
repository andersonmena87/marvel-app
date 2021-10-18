import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  private apiURL = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6da50ae7a4c936edc073d35e4f2348bd&hash=8f152e4ff3dada52eef532da3feadc0c';
  constructor(private http: HttpClient) { }

  getHeroes():Observable<any[]>{
    return this.http.get<any[]>(this.apiURL);
  }
}
