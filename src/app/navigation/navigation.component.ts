import { Component, OnInit } from '@angular/core';

import NavigationStructure from './../shared/navigation.structure.json';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  groups = NavigationStructure;

  constructor() { }

  ngOnInit(): void {
  }

}
