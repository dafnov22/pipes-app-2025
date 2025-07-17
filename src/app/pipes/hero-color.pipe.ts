import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {
  transform(value: Color): string {
    console.log('HeroColorPipe', value);
    //dependiendo el numero, me tiene que devolver un color
    // switch (value) {
    //   case 1:
    //     return 'black';
    //   case 2:
    //     return 'blue';
    //   case 3:
    //     return 'green';
    //   default:
    //     return 'red';
    // }
    return Color[value];
  }
}
