import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tap } from "rxjs/operators";
import { iComic } from './interface/comic.interface';
import { ComicService } from './services/comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})

export class ComicComponent {
  comic!:iComic;
  constructor(private comicSvc: ComicService, @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void{
    this.comicSvc.getComic(this.data.resourceUri).pipe(
      tap((res:any) => {
        let results = res.data.results;
        console.log(results);
        this.comic = results[0];
      })
    )
    .subscribe();
  }
}