import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  public tasks: Task[] = [];
  public tasks$!: Observable<Task[]>;
  public subscribe!: Subscription | undefined;

  constructor(public todo: TodolistService) {}

  ngOnInit(): void {
    this.tasks$ = this.todo.getTasks();
    this.getTasks();
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
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

  public getTasks(): void {
    this.subscribe = this.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }
}
