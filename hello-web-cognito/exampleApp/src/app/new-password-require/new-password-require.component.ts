import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl  } from '@angular/forms';
import { AuthenticateService}  from "../cognito-service.service";
//import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-password-require',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-password-require.component.html',
  styleUrl: './new-password-require.component.css'
})
export class NewPasswordRequireComponent {
  /*currentpassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';*/

  passwordForm = new FormGroup( {
    currentpassword : new FormControl(''),
    newPassword : new FormControl(''),
    confirmPassword : new FormControl(''),
  });

  constructor(private authService: AuthenticateService) {
  }

  confirmPasswordReset() {
    if(this.passwordForm.valid) {
      this.authService.changePassword(
        this.passwordForm.value.currentpassword!,
        this.passwordForm.value.newPassword!,
        this.passwordForm.value.confirmPassword!);
    }
  }
}
