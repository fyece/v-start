export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface PlatformInfo {
  platform: Platform;
  released_at: string;
  requirements_en: {
    minimum: string;
  };
}

export interface GamesDto {
  count: number;
  next: string;
  previous: string;
  results: Game[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  metacritic: number;
  platforms: PlatformInfo[];
}

export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description: string;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  released: string;
  tba: boolean;
  background_image: string;
  metacritic: number;
  metacritic_url: string;
  platforms: PlatformInfo[];
}

export interface GameStore {
  id: number;
  game_id: number;
  store_id: number;
  url: string;
}

export interface GameStoresDto {
  count: number;
  results: GameStore[];
}
