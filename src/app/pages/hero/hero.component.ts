import { Component, Input, Output, EventEmitter} from '@angular/core';
import { iHero } from '../heroes/interface/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  @Input() hero!: iHero;
  @Output() viewHero = new EventEmitter<iHero>();
  onClick(): void {
    console.log("click", this.hero);
    this.viewHero.emit(this.hero);
  }
}