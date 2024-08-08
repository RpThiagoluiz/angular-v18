import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mockDepartment } from './mock/mockDepartment';

export type LoginPayload = {
  emailId: string,
  password: string
}

export type Department = {
  deptId: number
  deptName: string
  createdDate: string
}

@Injectable({
  providedIn: 'root'
})



export class MasterService {
  //is a freeApi, some times it's return error
  private apiUrl: string = "https://freeapi.miniprojectideas.com/api/TicketsNew"

  department = mockDepartment.data

  constructor(private http: HttpClient
  ) { }

  login(payload: LoginPayload) {
    console.log({
      payload
    })
    // return this.http.post(`${this.apiUrl}/Login`, payload)
  }

  getAllDept() {
    return this.department
  }

  // createDept(payload: Department) {
  //   return this.department.push(payload)
  // }

  // updateDept(payload: Department) {
  //   const departmentIndex = this.department.findIndex(dpt => dpt.deptId === payload.deptId)


  //   if (!departmentIndex) {
  //     return {
  //       errorMessage: 'Department not found!',
  //       data: this.department

  //     }

  //   } else {
  //     this.department[departmentIndex] = { ...this.department[departmentIndex], ...payload }
  //     return this.department
  //   }
  // }

  // deleteDept(deptId: number) {

  //   return this.department.filter(dpt => dpt.deptId !== deptId)
  // }
}
