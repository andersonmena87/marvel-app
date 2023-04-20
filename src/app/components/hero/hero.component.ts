import { Component, Input, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComicComponent } from '../comic/comic.component';
import { iComic } from '../../models/comic.interface';
import { HeroDetailComponent } from '../heroDetail/heroDetail.component';
import { iHero } from '../../models/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  constructor(public dialog: MatDialog) {}
  @Input() hero!: iHero;
  @Output() addToFavouriteClick = new EventEmitter<iComic>();
  onClickHero(): void {
    const dialogRef = this.dialog.open(HeroDetailComponent, {
      data: {
        hero: this.hero
      }
    });
  }
  onClickComic(resourceUri:string): void {
    const dialogRef = this.dialog.open(ComicComponent, {
        data: {
          resourceUri: resourceUri
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      this.addToFavouriteClick.emit(result);
    });
  }

}
