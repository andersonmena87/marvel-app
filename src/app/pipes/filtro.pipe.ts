import { Pipe, PipeTransform } from '@angular/core';
import { iHero } from '../models/hero.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(heroes: iHero[], page: number = 0, pageSize: number = 0, search: string): iHero[] {
    if(search.length === 0)
    return heroes ? heroes.slice(page, page + pageSize): [];

    const filterHeroes = heroes.filter( hero => hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    return filterHeroes;
  }

}
