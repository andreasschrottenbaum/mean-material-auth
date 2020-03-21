import { Component, OnInit } from '@angular/core';

import { RouteGroups } from './../app-routing.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  routeGroups;

  constructor() {
    this.routeGroups = RouteGroups;
  }

  ngOnInit(): void {
  }

}
