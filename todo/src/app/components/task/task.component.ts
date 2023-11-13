import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  public name: string = 'JeanJean';
  public complete: boolean = true;

  getComplete(): string {
    return this.complete ? 'Fini' : 'En cours...';
  }
}
