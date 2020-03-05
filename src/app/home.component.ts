import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div *ngIf="currentUser">
        <h2>Please Select A Notes Catagoty From The Navbar Or</h2>
        <h2><a routerLink="notes/note/new" >Add A New Notes Catagory</a></h2>
      </div>
      <div *ngIf="!currentUser">
        <h1>Please Login</h1>
        <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">E-Mail</label>
            <input type="text"
                   class="form-control"
                   id="email"
                   formControlName="email">
            <div *ngIf="userForm.controls['email'].invalid && userForm.controls['email'].dirty && userForm.controls['email'].touched">
                <p>Invalid Email</p>
            </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password"
               class="form-control"
               id="password"
               formControlName="password">
          </div>
          <button type="submit" class="btn btn-primary" [disabled]="userForm.invalid">Login</button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
    body {
      padding-top: 70px;
    }
  `
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private currentUser;
  private userForm: FormGroup

  constructor(private formBuilder: FormBuilder, private angularFire: AngularFire) { }

  ngOnInit() {
    this.angularFire.auth.subscribe(authState => {
      if (authState) {
        this.currentUser = authState.auth.email
      } 
    });

    this.userForm = this.formBuilder.group({
            'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
            'password': ['', Validators.required],
        });
  }

  

  onSubmit() {
    this.angularFire.auth.login({
      email: this.userForm.value.email,
      password: this.userForm.value.password
    }, {
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    })
    .then(authState => console.log("logged in", authState))
    .catch(error => console.log("fuck", error))
  }

}

