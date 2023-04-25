import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { iHero } from '../../models/hero.interface';

@Component({
  selector: 'app-heroDetail',
  templateUrl: './heroDetail.component.html',
  styleUrls: ['./heroDetail.component.css']
})

export class HeroDetailComponent {
  closeSrc = './assets/images/btn-close.png';
  heroDetail!:iHero;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void{
    this.heroDetail = this.data.hero;
  }

}
