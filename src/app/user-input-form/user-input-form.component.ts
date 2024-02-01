import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgFor } from '@angular/common';
import { LichessService } from '../lichess.service';

@Component({
  selector: 'app-user-input-form',
  standalone: true,
  imports: [FormsModule, NgFor, JsonPipe],
  templateUrl: './user-input-form.component.html',
  styleUrl: './user-input-form.component.css'
})
export class UserInputFormComponent implements OnInit {
  model = new Player(1, "");
  submitted = false;

  constructor(private lichessService: LichessService) { }

  // TODO: Remove this and display in separate component
  ngOnInit(): void {
    this.lichessService.openingData.subscribe(data => console.log(data));
  }

  onSubmit() {
    console.log("Submitting!");
    this.submitted = true;
    this.lichessService.fetchOpeningData({
      player: this.model.lichessUsername as string,
      color: "white",
      play: "d2d4"
    });
  }
}