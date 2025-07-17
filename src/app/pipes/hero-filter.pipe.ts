import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(value: Hero[], searchQuery: string): Hero[] {
    if (!searchQuery) return value; // si hay un string vacío, retorna todos los héroes

    searchQuery = searchQuery.toLowerCase();

    return value.filter((hero) =>
      hero.name.toLowerCase().includes(searchQuery)
    );
  }
}
