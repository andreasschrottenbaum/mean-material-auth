import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './api.service';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User;
  private currentToken: string;

  constructor(
    private router: Router,
    private api: ApiService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.currentToken = localStorage.getItem('access_token');
  }

  get user() { return this.currentUser; }
  get token() { return this.currentToken; }

  login(data) {
    this.api.post('auth/signin', data)
      .subscribe((response: any) => {
        if (response.status === 'success') {
          this.currentUser = response.data;
          this.currentToken = response.token;

          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('access_token', response.token);

          this.router.navigate(['/']);
        }
      });
  }

  logout() {
    this.currentUser = null;
    this.currentToken = null;

    localStorage.removeItem('user');
    localStorage.removeItem('access_token');

    this.router.navigate(['/signin']);
  }
}
