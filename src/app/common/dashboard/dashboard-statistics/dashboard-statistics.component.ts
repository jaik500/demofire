import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-statistics',
  imports: [MatCardModule],
  templateUrl: './dashboard-statistics.component.html',
  styleUrl: './dashboard-statistics.component.scss'
})
export class DashboardStatisticsComponent {

  reactionValue = input.required<number>();
  reactionLabel = input.required<string>();
  recordValue = input.required<number>();
  recordLabel = input.required<string>();
  postValue = input.required<number>();
  postLabel = input.required<string>();

}
