import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AUTHService } from '../auth.service';
import { FacebookService } from '../facebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    password: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,}')])
  });

  logInForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(private authService: AUTHService, private facebookService: FacebookService, private router: Router) { }

  ngOnInit() {
    if (this.authService.token || this.facebookService.user) {
      this.router.navigate(['/account']);
    }
    console.log(this.authService.token);
  }

  signUp(form: any) {
    const obj = {email: form.value.email, password: form.value.password};
    this.authService.signUp(obj);
    form.reset();
  }

  logIn(form: any) {
    const obj = {email: form.value.email, password: form.value.password};
    this.authService.logIn(obj);
    form.reset();
  }

  signUpFacebook() {
    this.facebookService.signInWithFB();
  }

}
