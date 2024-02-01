import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInputFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chess-prep-tool';
}