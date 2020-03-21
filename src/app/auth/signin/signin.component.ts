import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HeadlineService } from 'src/app/shared/services/headline.service';
import { ApiService } from 'src/app/shared/services/api.service';

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
    private api: ApiService
  ) {
    this.headline.setTitle('Login');
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  save(data) {
    this.api.post('/auth/login', data)
      .subscribe(response => {
        console.log(response);
      });
  }
}
