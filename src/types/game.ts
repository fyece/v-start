export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GamesDto {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  image: string;
  metacritic: number;
  platforms: Platform[];
}
