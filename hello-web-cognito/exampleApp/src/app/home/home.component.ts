import { Component } from '@angular/core';
import { AuthenticateService } from "../cognito-service.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authservice: AuthenticateService) {
  }

  logOut() {
    this.authservice.logOut();
  }
}
