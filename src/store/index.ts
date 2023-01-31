import { configureStore } from "@reduxjs/toolkit";
import { KinopoiskUnofficialApi } from "./KinopoiskApiUnofficial/KAU.api";
import { kinopoiskReduser } from "./KinopoiskApiUnofficial/KAu.slice";
//Не используется, всё в Firebase
export const store = configureStore({
  reducer: {
    [KinopoiskUnofficialApi.reducerPath]: KinopoiskUnofficialApi.reducer,
    kinopoisk: kinopoiskReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(KinopoiskUnofficialApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
