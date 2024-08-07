import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginPayload, MasterService } from '../../services/master.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginPayload: LoginPayload = {
    emailId: '',
    password: '',
  }



  onLogin() {
    console.log({
      loginPayload: this.loginPayload
    })
  }

}
