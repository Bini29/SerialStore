export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}

export interface IFilm {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface ServerResponse<T> {
  keyword: string;
  pagesCount: number;
  films: IFilm[];
  searchFilmsCountResult: number;
}
export interface IFilmDetail {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: any;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation?: any;
  isTicketsAvailable: boolean;
  productionStatus?: any;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  countries: Country[];
  genres: Genre[];
  startYear?: any;
  endYear?: any;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: Date;
}
export interface IEpisode {
  seasonNumber: number;
  episodeNumber: number;
  nameRu: string;
  nameEn: string;
  synopsis?: any;
  releaseDate: string;
}

export interface Seasons {
  number: number;
  episodes: IEpisode[];
}

export interface ServerSeasonsResponse {
  total: number;
  items: Seasons[];
}
