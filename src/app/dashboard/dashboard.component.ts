import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../shared/services/headline.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private headline: HeadlineService
  ) {
    this.headline.setTitle('Dashboard');
    this.headline.setDescription('Hello, World');
  }

  ngOnInit() {
  }
}
