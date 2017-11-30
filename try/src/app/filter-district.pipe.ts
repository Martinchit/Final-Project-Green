import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDistrict'
})
export class FilterDistrictPipe implements PipeTransform {

  transform(chargers: any, term: any): any {
    if (term === undefined) {
      return chargers;
    }
    return chargers.filter((charger) => {
      return charger.districtS.replace(' ', '').toLowerCase().includes(term.replace(' ', '').toLowerCase());
    });
  }

}
