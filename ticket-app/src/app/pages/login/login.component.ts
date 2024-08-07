import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginPayload, MasterService } from '../../services/master.service';
import { Router } from '@angular/router';
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

  mockResult = {
    "message": "",
    "result": true,
    "data": {
      "employeeId": 298,
      "employeeName": "admin",
      "contactNo": "1122332233",
      "emailId": "admin@gmail.com",
      "deptId": 161,
      "password": "admin",
      "gender": "male",
      "role": "Admin"
    }
  }

  //Angular 16 - inject service
  masterSrv = inject(MasterService)

  router = inject(Router)

  onLogin() {

    //Mock
    this.masterSrv.login(this.loginPayload)
    localStorage.setItem('ticketUser', JSON.stringify(this.mockResult.data));
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
