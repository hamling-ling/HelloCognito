import { Component } from '@angular/core';
//import { NgForm  } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl  } from '@angular/forms';
import { AuthenticateService } from '../cognito-service.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //emailaddress: string = '';
  //password: string = '';

  loginForm = new FormGroup({
    emailaddress: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authservice: AuthenticateService) {
  }

  onSignIn() {
    if(this.loginForm.valid) {
      this.authservice.login(
        this.loginForm.value.emailaddress,
        this.loginForm.value.password);
    }
  }
}
