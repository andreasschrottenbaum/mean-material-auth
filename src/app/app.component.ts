import { Component, ViewChild } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, Event, NavigationEnd, NavigationStart } from '@angular/router';
import { HeadlineService } from './shared/services/headline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public headline: HeadlineService
  ) {
    this.router.events.subscribe((event: Event) => {
      // Reset the title and headline on route change
      if (event instanceof NavigationStart) {
        this.headline.setTitle('');
      }

      // Close the navbar on route change on handset devices
      if (event instanceof NavigationEnd) {
        if (window.matchMedia(Breakpoints.Handset).matches) {
          this.drawer.close();
        }
      }
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
