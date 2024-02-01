import { Component, OnInit } from '@angular/core';
import { LichessService } from '../lichess.service';
import { Move, OpeningVariationResponse } from '../lichess-types';

@Component({
  selector: 'app-opening-view',
  standalone: true,
  imports: [],
  templateUrl: './opening-view.component.html',
  styleUrl: './opening-view.component.css'
})
export class OpeningViewComponent implements OnInit {
  openingMoveStrArr: string[] = [];

  constructor(private lichessService: LichessService) { }

  ngOnInit(): void {
    this.lichessService.openingData.subscribe((data) => {
      if (data.moves) {
        this.openingMoveStrArr = (data.moves as Move[]).map(moveObj => moveObj.uci);
      }
    });
  }
}