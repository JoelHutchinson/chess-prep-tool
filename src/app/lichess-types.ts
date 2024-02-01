// Define interface for a move in the response
export interface Move {
    uci: string;
    san: string;
    averageOpponentRating: number;
    performance: number;
    white: number;
    draws: number;
    black: number;
    game: Game | null;
}
  
  // Define interface for a game object in the move and recent game responses
export interface Game {
    id: string;
    winner: string;
    speed: string;
    mode: string;
    black: {
        name: string;
        rating: number;
    };
    white: {
        name: string;
        rating: number;
    };
    year: number;
    month: string;
}
  
  // Define interface for a recent game in the response
export interface RecentGame {
    uci: string;
    id: string;
    winner: string;
    speed: string;
    mode: string;
    black: {
    name: string;
    rating: number;
    };
    white: {
    name: string;
    rating: number;
    };
    year: number;
    month: string;
}
  
  // Extend OpeningVariationResponse to include moves and recentGames with proper types
export interface OpeningVariationResponse {
    white: number;
    draws: number;
    black: number;
    moves: Move[];
    recentGames: RecentGame[];
    opening: {
        eco: string;
        name: string;
    };
    queuePosition: number;
}
  
  // Define the params interface with an index signature
export interface OpeningVariationParams {
    player: string;
    variant?: string;
    fen?: string;
    play?: string;
    speeds?: string[];
    modes?: string[];
    since?: string;
    until?: string;
    moves?: number;
    recentGames?: number;
    [key: string]: string | string[] | number | undefined; // Index signature
}