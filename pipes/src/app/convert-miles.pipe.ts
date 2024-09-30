import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertmiles',
  standalone: true
})
export class ConvertMilesPipe implements PipeTransform {

  transform(value: any): any {

    if (!value) {
      return '';
    }
    
    let km = value * 1.60934;

    console.log('km: ' + km);

    return km; 
  }

}
