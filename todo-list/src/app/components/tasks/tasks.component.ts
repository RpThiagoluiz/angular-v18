import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskType } from '../../../types/taskType';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tasks: TaskType[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      console.log(data);
    });

  }

  AddTask(task: TaskType) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }

  deleteTask(task: TaskType) {
    this.taskService.deleteTask(task).subscribe(() =>
      (this.tasks = this.tasks.filter((el) => el.id !== task.id)));
  }

  onToggleDone(task: TaskType) {
    task.concluido = !task.concluido;
    this.taskService.updateTask(task).subscribe();
  }

}
