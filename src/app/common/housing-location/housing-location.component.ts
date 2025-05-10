import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HousingLocation } from '../../models/housing-location';
import { MatCardModule } from '@angular/material/card';
import { HousingService } from '../../services/housing.service';
import { HouseFilterPipe } from '../../pipes/house-filter.pipe';

@Component({
    selector: 'app-housing-location',
    imports: [CommonModule, RouterModule, FormsModule, MatProgressSpinnerModule, MatCardModule, HouseFilterPipe],
    templateUrl: './housing-location.component.html',
    styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filterdLocationList: HousingLocation[] = [];

  searchTerm = signal('');

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filterdLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) this.filterdLocationList = this.housingLocationList;

    this.filterdLocationList = this.housingLocationList.filter(
      // filter using city
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()) ||
        housingLocation?.state.toLowerCase().includes(text.toLowerCase()) ||
        housingLocation?.name.toLowerCase().includes(text.toLowerCase()) 
    );

  }

}
