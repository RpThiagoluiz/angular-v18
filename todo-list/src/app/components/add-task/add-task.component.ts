import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { TaskType } from '../../../types/taskType';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<TaskType>();

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;

  changeView(valor: boolean) {
    this.mostrarAddTarefa = valor;
  }

  onSubmit() {
    if (!this.tarefa) {
      alert('Adicione uma tarefa!')
      return;
    }

    const newTask = {
      id: new Date().getTime().toString(),
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onAddTask.emit(newTask);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;

  }
}
