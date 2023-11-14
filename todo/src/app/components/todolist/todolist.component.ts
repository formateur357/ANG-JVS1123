import { Component } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  // public tasks: Task[] = [];

  constructor(public todo: TodolistService) {}

  public get nbTrue(): number {
    return this.todo.tasks?.length
      ? this.todo.tasks.filter((task) => task.complete).length
      : 0;
  }

  public get nbTasks(): number {
    return this.todo.tasks?.length ? this.todo.tasks.length : 0;
  }

  public get percent(): number {
    return this.nbTasks != 0 ? (this.nbTrue / this.nbTasks) * 100 : 0;
  }

  public get textColor(): string {
    let color = this.percent > 0 ? 'orange' : 'red';
    return this.percent === 100 ? 'green' : color;
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }
}
