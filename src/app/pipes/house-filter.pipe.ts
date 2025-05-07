import { Pipe, PipeTransform } from '@angular/core';
import { HousingLocation } from '../models/housing-location';

@Pipe({
  name: 'houseFilter',
  standalone: true
})
export class HouseFilterPipe implements PipeTransform {

  transform(houses: HousingLocation[], searchTerm: string): HousingLocation[] {
    if (!searchTerm) {
      return houses;
    }
    const text = searchTerm.toLowerCase();
    return houses.filter((house) => {
      return (
        house.city.toLocaleLowerCase().includes(text) ||
        house.state.toLocaleLowerCase().includes(text)
      );
    });
  }

}
