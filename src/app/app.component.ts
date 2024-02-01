import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';
import { OpeningViewComponent } from './opening-view/opening-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInputFormComponent, OpeningViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chess-prep-tool';
}