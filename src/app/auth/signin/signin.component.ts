import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HeadlineService } from 'src/app/shared/services/headline.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private headline: HeadlineService,
    public auth: AuthService
  ) {
    this.headline.setTitle('Login');
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
