import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth.guard';

// components
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const RouteGroups = [
  {
    name: 'Authenication',
    links: [
      {
        icon: 'dashboard',
        href: 'auth/login',
        title: 'Login',
        component: SigninComponent,
        data: {
          expectedRole: 'guest'
        }
      }
    ]
  },
  {
    name: 'Navigation',
    links: [
      {
        icon: 'dashboard',
        href: '',
        title: 'Dashboard',
        component: DashboardComponent
      }
    ]
  }
];

const buildRoutes$ = (groups: any[]) => {
  const arr = [];

  groups.forEach(group => {
    group.links.forEach((link: { href: string; component: any; data?: any; }) => {
      arr.push({
        path: link.href,
        component: link.component,
        canActivate: [AuthGuard],
        data: link.data
      });
    });
  });

  return arr;
};

@NgModule({
  imports: [RouterModule.forRoot(buildRoutes$(RouteGroups))],
  exports: [RouterModule]
})
export class AppRoutingModule {}
