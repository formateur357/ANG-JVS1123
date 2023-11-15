import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  public userForm: FormGroup;

  constructor(
    public us: UserService,
    public fb: FormBuilder,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      lastName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      team: this.fb.control('', [Validators.required]),
      skillArray: this.fb.array([this.addSkill()]),
    });
  }

  public addSkill(): FormControl {
    return this.fb.control('', [Validators.required, Validators.minLength(3)]);
  }

  public addSkills(): void {
    this.userForm.get('skillArray')?.value.push(this.addSkill());
  }

  public removeSkill(index: number): void {
    this.userForm.get('skills')?.value.removeAt(index);
  }

  public onSubmit(userForm: FormGroup): void {
    this.us.addUser(
      new User(
        this.userForm.get('firstName')?.value,
        this.userForm.get('lastName')?.value,
        this.userForm.get('email')?.value,
        this.userForm.get('team')?.value,
        []
      )
    );
    this.router.navigate(['userlist']);
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }
}
