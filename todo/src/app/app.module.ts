import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
