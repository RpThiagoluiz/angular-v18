import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';
import { type TaskType } from '../../../types/taskType';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: TaskType;
  @Output() onDeleteTask = new EventEmitter<TaskType>();
  @Output() onToggleDone = new EventEmitter<TaskType>();

  faTimes = faTimes

  onDelete(task: TaskType) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: TaskType) {
    this.onToggleDone.emit(task);
  }
}
