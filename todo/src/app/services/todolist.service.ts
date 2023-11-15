import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';
import { BehaviorSubject, Observable } from 'rxjs';

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
  private tasks: Task[] = [];
  private _tasks: BehaviorSubject<Task[]>;
  readonly tasks$: Observable<Task[]>;

  constructor() {
    this._tasks = new BehaviorSubject<Task[]>([]);
    this.tasks$ = this._tasks.asObservable();
    this.updateList(initialTasks);
  }

  private emit(tasks: Task[]): void {
    this._tasks.next([...tasks]);
  }

  public getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  public async updateList(list: Task[]): Promise<void> {
    this.tasks = await new Promise<Task[]>((resolve) => {
      setTimeout(() => {
        resolve([...list]);
      }, 3000);
    });
    this.emit(this.tasks);
  }

  public toggleComplete(id: number): void {
    let task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.complete = !task.complete;
      this.emit(this.tasks);
    }
  }

  public getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }
}
