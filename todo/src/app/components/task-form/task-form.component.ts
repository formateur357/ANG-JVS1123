import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  constructor(private todo: TodolistService, private router: Router) {}

  public onSubmit(form: NgForm): void {
    this.todo.addTask(
      new Task(
        form.value.title,
        form.value.complete === 0 ? false : true,
        form.value.description
      )
    );
    this.router.navigate(['todolist']);
  }
}
