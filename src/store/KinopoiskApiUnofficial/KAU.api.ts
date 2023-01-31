import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IFilm,
  IFilmDetail,
  ServerSeasonsResponse,
  ServerResponse,
} from "../../Models/Models";

export const KinopoiskUnofficialApi = createApi({
  reducerPath: "kinopoisk/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
  }),
  endpoints: (buld) => ({
    searchFilms: buld.query<IFilm[], string>({
      query: (seach: string) => ({
        url: `v2.1/films/search-by-keyword`,
        params: {
          keyword: seach,
        },
        headers: {
          "X-API-KEY": "34f08f04-ad84-4aec-a0dd-bab9cc1bd380",
          "Content-Type": "application/json",
          "mode":"no-cors"
        },
      }),
      transformResponse: (response: ServerResponse<IFilm>) => response.films,
    }),
    getFilm: buld.query<IFilmDetail, number>({
      query: (id: number) => ({
        url: `v2.2/films/${id}`,
        headers: {
          "X-API-KEY": "34f08f04-ad84-4aec-a0dd-bab9cc1bd380",
          "Content-Type": "application/json",
          "mode":"no-cors"
        },
      }),
    }),
    getSeasons: buld.query<ServerSeasonsResponse, number>({
      query: (id: number) => ({
        url: `v2.2/films/${id}/seasons`,
        headers: {
          "X-API-KEY": "34f08f04-ad84-4aec-a0dd-bab9cc1bd380",
          "Content-Type": "application/json",
          "mode":"no-cors"
        },
      }),
    }),
  }),
});

export const {
  useSearchFilmsQuery,
  useLazyGetFilmQuery,
  useGetSeasonsQuery,
  useLazyGetSeasonsQuery,
} = KinopoiskUnofficialApi;
