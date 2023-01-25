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
    baseUrl: "https://kinopoiskapiunofficial.tech/api/v2.2",
  }),
  endpoints: (buld) => ({
    searchFilms: buld.query<IFilm[], string>({
      query: (seach: string) => ({
        url: `films`,
        params: {
          keyword: seach,
        },
        headers: {
          "X-API-KEY": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
        },
      }),
      transformResponse: (response: ServerResponse<IFilm>) => response.items,
    }),
    getFilm: buld.query<IFilmDetail, number>({
      query: (id: number) => ({
        url: `films/${id}`,
        headers: {
          "X-API-KEY": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
        },
      }),
    }),
    getSeasons: buld.query<ServerSeasonsResponse, number>({
      query: (id: number) => ({
        url: `films/${id}/seasons`,
        headers: {
          "X-API-KEY": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useLazySearchFilmsQuery,
  useLazyGetFilmQuery,
  useGetSeasonsQuery,
} = KinopoiskUnofficialApi;
