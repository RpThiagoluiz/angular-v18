import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginPayload, MasterService } from '../../services/master.service';
import { Router } from '@angular/router';
import { localStorageKey } from '../../utils/localStorageKey';
import { mockLoginData } from '../../services/mock/mockLoginData';
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



  //Angular 16 - inject service
  masterSrv = inject(MasterService)

  router = inject(Router)

  onLogin() {

    //Mock
    this.masterSrv.login(this.loginPayload)
    localStorage.setItem(localStorageKey, JSON.stringify(mockLoginData));
    this.router.navigateByUrl('dashboard')

    // this.masterSrv.login(this.loginPayload).subscribe((res: any) => {
    //   if (res.result) {
    //     localStorage.setItem('ticketUser', JSON.stringify(res.data));
    //     this.router.navigateByUrl('dashboard')
    //   } else {
    //     localStorage.setItem('ticketUser', JSON.stringify(this.mockResult.data));
    //     this.router.navigateByUrl('dashboard')
    //   }
    // })
  }

}
