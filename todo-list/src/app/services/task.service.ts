import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskType } from '../../types/taskType';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.apiUrl);
  }

  deleteTask(task: TaskType): Observable<TaskType> {
    return this.http.delete<TaskType>(`${this.apiUrl}/${task.id}`);
  }

  updateTask(task: TaskType): Observable<TaskType> {
    return this.http.put<TaskType>(`${this.apiUrl}/${task.id}`, task);
  }

  addTask(task: TaskType): Observable<TaskType> {
    return this.http.post<TaskType>(`${this.apiUrl}`, task);
  }

}
