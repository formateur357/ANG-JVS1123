import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { TaskComponent } from './components/task/task.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavComponent } from './components/nav/nav.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TodolistComponent,
    LoginComponent,
    LogoutComponent,
    NavComponent,
    TaskDetailsComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
