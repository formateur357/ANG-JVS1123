import { Injectable } from '@angular/core';
import { User } from '../class/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

const initialUsers: User[] = [
  new User('Jean', 'Dujardin', 'jdujardin@gmail.com', 'kiwi', [
    'sait lacer ses chaussures',
    'compter deux par deux',
  ]),
  new User('Paul', 'Demaison', 'pdemaison@gmail.com', 'pasteque', [
    'sait lacer ses chaussettes',
    'compter trois par trois',
  ]),
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  private _users: BehaviorSubject<User[]>;
  readonly users$: Observable<User[]>;

  constructor() {
    this._users = new BehaviorSubject<User[]>([]);
    this.users$ = this._users.asObservable();
    this.updateList(initialUsers);
  }

  private emit(users: User[]): void {
    this._users.next([...users]);
  }

  public getUsers(): Observable<User[]> {
    return this.users$;
  }

  public async updateList(list: User[]): Promise<void> {
    this.users = await new Promise<User[]>((resolve) => {
      setTimeout(() => {
        resolve([...list]);
      }, 3000);
    });
    this.emit(this.users);
  }

  public addUser(user: User) {
    this.users.push(user);
    this.emit(this.users);
  }
}
