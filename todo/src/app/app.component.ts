import { Component } from '@angular/core';
import { Task } from './class/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  public count: number = 0;

  public tasks: Task[] = [];

  public toggleCount(state: boolean): void {
    this.count += state ? 1 : -1;
  }

  constructor() {
    this.tasks.push(new Task(1, 'Promener le chien', false, 'Dans le parc'));
    this.tasks.push(new Task(2, 'Faire le menage', false, 'Aspi'));
    this.tasks.push(new Task(3, 'Faire les courses', false, 'Liste: ...'));
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }
}
