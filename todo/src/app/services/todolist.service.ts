import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

const initialTasks: Task[] = [
  new Task(1, 'Promener le chien', false, 'Dans le parc', new Date()),
  new Task(2, 'Faire le menage', false, 'Aspi', new Date('01/04/2023 09:00')),
  new Task(
    3,
    'Faire les courses',
    false,
    'Liste: ...',
    new Date('03/04/1999 13:23')
  ),
];

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  public tasks: Task[] = [];

  constructor() {
    this.updateList(initialTasks);
  }

  public async updateList(list: Task[]): Promise<void> {
    this.tasks = await new Promise<Task[]>((resolve) => {
      setTimeout(() => {
        resolve([...list]);
      }, 3000);
    });
  }

  public toggleComplete(id: number): void {
    let task = this.tasks.find((task) => task.id === id);
    if (task) task.complete = !task.complete;
  }
}
