import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ComicService {
  //private apiURL = 'http://gateway.marvel.com/v1/public/comics/21366?ts=1&apikey=6da50ae7a4c936edc073d35e4f2348bd&hash=8f152e4ff3dada52eef532da3feadc0c';
  constructor(private http: HttpClient) { }

  getComic(apiURL:string):Observable<any[]>{
    return this.http.get<any[]>(apiURL + "?ts=1&apikey=6da50ae7a4c936edc073d35e4f2348bd&hash=8f152e4ff3dada52eef532da3feadc0c");
  }
}
