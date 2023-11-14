import { Component } from '@angular/core';
import { Task } from './class/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  public promise: Promise<string>;
  public tasks: Task[] = [];

  constructor() {
    this.promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        this.tasks.push(
          new Task(1, 'Promener le chien', false, 'Dans le parc', new Date())
        );
        this.tasks.push(
          new Task(
            2,
            'Faire le menage',
            false,
            'Aspi',
            new Date('01/04/2023 09:00')
          )
        );
        this.tasks.push(
          new Task(
            3,
            'Faire les courses',
            false,
            'Liste: ...',
            new Date('03/04/1999 13:23')
          )
        );
        resolve('Promesse resolu');
      }, 3000);
    });
  }

  public get nbTrue(): number {
    return this.tasks?.length
      ? this.tasks.filter((task) => task.complete).length
      : 0;
  }

  public get nbTasks(): number {
    return this.tasks?.length ? this.tasks.length : 0;
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
