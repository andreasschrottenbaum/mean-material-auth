import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
        component: SigninComponent
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
    group.links.forEach((link: { href: any; component: any; }) => {
      arr.push({
        path: link.href,
        component: link.component
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
