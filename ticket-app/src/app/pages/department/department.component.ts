import { Component, inject, OnInit } from '@angular/core';
import { Department, MasterService } from '../../services/master.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {

  masterSrc = inject(MasterService)
  deptList: Department[] | [] = []
  newDepartment: Department = {
    deptId: 0,
    deptName: '',
    createdDate: ''
  }

  ngOnInit(): void {
    this.getDept()
  }

  getDept() {
    this.deptList = this.masterSrc.getAllDept()
  }

  createDept(payload: Department) {
    console.log({ payload })
    return this.deptList
  }
}
