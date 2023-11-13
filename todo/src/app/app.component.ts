import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';

  public name1: string = 'Jean-Jean';
  public name2: string = 'Jean-Claude';
  public name3: string = 'Jean-Michel';

  public complete1: boolean = true;
  public complete2: boolean = false;
  public complete3: boolean = true;
}
