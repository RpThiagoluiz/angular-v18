import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from '../types/loginResponse.type';
import { LoginResponse } from '../types/loginPayload.type';
import { SESSION_STORAGE_NAME, SESSION_STORAGE_USERNAME } from '../utils/sessionStorage';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  login(payload: LoginPayload) {
    return this.httpClient.post<LoginResponse>('/login', {
      email: payload.email,
      password: payload.password
    }).pipe(tap((value) => {
      sessionStorage.setItem(SESSION_STORAGE_NAME, value.token)
      sessionStorage.setItem(SESSION_STORAGE_USERNAME, value.name)
    }))
  }
}
