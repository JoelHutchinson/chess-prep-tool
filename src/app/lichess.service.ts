import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject  } from 'rxjs';
import { OpeningVariationResponse } from './lichess-types';

@Injectable({
  providedIn: 'root'
})
export class LichessService {
  private openingDataSource = new BehaviorSubject<any>(null);
  private openingsBaseUrl = 'https://explorer.lichess.ovh/player';
  openingData = this.openingDataSource.asObservable();

  constructor(private http: HttpClient) { }

  fetchOpeningData(params: {
    player: string,
    variant?: string,
    fen?: string,
    play?: string,
    speeds?: string[],
    modes?: string[],
    since?: string,
    until?: string,
    moves?: number,
    recentGames?: number,
    [key: string]: string | string[] | number | undefined;
  }): void{
    // Construct query parameters from the input
    const queryParams = new URLSearchParams();
    for (const key in params) {
      const value = params[key];
      if (value !== undefined) {
        if (Array.isArray(value)) {
          queryParams.set(key, value.join(','));
        } else {
          queryParams.set(key, String(value));
        }
      }
    }

    // Emit returned data to subscribers
    this.http.get<OpeningVariationResponse>(`${this.openingsBaseUrl}?${queryParams.toString()}`).subscribe({
      next: data => this.openingDataSource.next(data),
      error: error => console.error("Error fetching opening data: ", error)
    });
  }
}