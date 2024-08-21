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

  deleteTask(tarefa: TaskType): Observable<TaskType> {
    return this.http.delete<TaskType>(`${this.apiUrl}/${tarefa.id}`);
  }

  updateTask(tarefa: TaskType): Observable<TaskType> {
    return this.http.put<TaskType>(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }

  addTask(tarefa: TaskType): Observable<TaskType> {
    return this.http.post<TaskType>(`${this.apiUrl}`, tarefa);
  }

}
