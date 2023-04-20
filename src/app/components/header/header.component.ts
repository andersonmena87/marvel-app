import { Component, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imageSrc = './assets/images/marvel.png';
  imgSearch = './assets/images/search.png';
  @Input() searchSubject!: Subject<string>;

  onSearchHero(search: string) {
    this.searchSubject.next(search);
  }
}
