import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],

  // template: `
  //   <section>
  //     <form>
  //       <input type="text" placeholder="Filter by city" />
  //       <button class="primary" type="button">Search</button>
  //     </form>
  //   </section>
  // `, // //////In this step, you add a search filter and button that is used in a later lesson. For now, that's all that HomeComponent has. Note that, this step just adds the search elements to the layout without any functionality, yet.
  // ng g c home
  template: `
    <section>
      <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
   
  `,
  //In this lesson, you added a new property binding and passed in a reference to a class property. Now, the HousingLocationComponent has access to data that it can use to customize the component's display.
  styleUrl: './home.component.css',
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
}
// From HomeComponent, delete the housingLocationList array entries and assign housingLocationList the value of empty array ([]). In a few steps you will update the code to pull the data from the HousingService.

// In HomeComponent, add the following code to inject the new service and initialize the data for the app. The constructor is the first function that runs when this component is created. The code in the constructor will assign the housingLocationList the value returned from the call to getAllHousingLocations.