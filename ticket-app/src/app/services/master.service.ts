import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type LoginPayload = {
  emailId: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  //is a freeApi, some times it's return error
  private apiUrl: string = "https://freeapi.miniprojectideas.com/api/TicketsNew"

  constructor(private http: HttpClient
  ) { }

  login(payload: LoginPayload) {
    console.log({
      payload
    })
    // return this.http.post(`${this.apiUrl}/Login`, payload)
  }
}
