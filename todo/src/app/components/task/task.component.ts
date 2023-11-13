import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  public name: string = 'JeanJean';
  public complete: boolean = false;

  getComplete(): string {
    return this.complete ? 'Fini' : 'En cours...';
  }

  getBadgeVariant(): string {
    const variant = 'd-inline float-right badge text-bg-';

    return this.complete ? variant + 'success' : variant + 'warning';
  }

  getItemVariant(): string {
    const variant = 'list-group-item list-group-item-';

    return this.complete ? variant + 'success' : variant + 'warning';
  }

  getButtonText(): string {
    return this.complete ? 'Annuler' : 'Terminer';
  }

  toggleComplete(): void {
    this.complete = !this.complete;
  }
}
