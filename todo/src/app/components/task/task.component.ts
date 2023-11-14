import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(private todo: TodolistService) {}

  getComplete(): string {
    return this.task.complete ? 'Fini' : 'En cours...';
  }

  getBadgeVariant(): string {
    const variant = 'd-inline float-right badge text-bg-';

    return this.task.complete ? variant + 'success' : variant + 'warning';
  }

  getItemVariant(): string {
    const variant = 'list-group-item list-group-item-';

    return this.task.complete ? variant + 'success' : variant + 'warning';
  }

  getButtonText(): string {
    return this.task.complete ? 'Annuler' : 'Terminer';
  }

  toggleComplete(): void {
    this.todo.toggleComplete(this.task.id);
  }
}
