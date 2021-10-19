import { Pipe, PipeTransform } from '@angular/core';
import { iHero } from '../interface/hero.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(heroes: iHero[], page: number = 0, search: string): iHero[] {
    if(search.length === 0)
    return heroes.slice(page, page + 10);

    console.log(heroes)
    const filterHeroes = heroes.filter( hero => hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    return filterHeroes;
  }

}
