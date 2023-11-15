import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public users: User[] = [];
  public users$!: Observable<User[]>;
  public subscribe!: Subscription | undefined;

  constructor(public us: UserService) {}

  ngOnInit(): void {
    this.users$ = this.us.getUsers();
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  public getUsers(): void {
    this.subscribe = this.users$.subscribe((users) => {
      this.users = users;
    });
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }
}
