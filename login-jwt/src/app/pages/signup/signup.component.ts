import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, Form, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { LoginService } from '../../services/login.service';
import { LoginPayload } from '../../types/loginResponse.type';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [LoginLayoutComponent, ReactiveFormsModule, PrimaryInputComponent, NgIf],
  providers: [
    LoginService,
    ToastrService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup<{
    name: FormControl,
    email: FormControl,
    password: FormControl,
    confirmPassword: FormControl
  }>


  constructor(private router: Router, private loginService: LoginService, private toastService: ToastrService) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}/)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {
      validators: this.passwordMatchValidator.bind(this)
    })
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatchError: true };
  }

  submit() {
    //TODO:
    this.loginService.login({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }).subscribe({
      next: () => this.toastService.success("Login Success"),
      error: () => this.toastService.error("Error, try again later")
    })
  }
  navigate() {
    this.router.navigate(['/login'])
  }
}
