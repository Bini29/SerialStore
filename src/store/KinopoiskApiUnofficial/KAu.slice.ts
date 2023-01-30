import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import firebase from "firebase/compat";
const LS_F_KEY = "rfc";

interface KinopoiskState {
  favorites: { filmId: number; season: number; id: string }[];
  user: any;
}

interface IPayload {
  filmId: number;
  season: number;
  id: string;
}

const initialState: KinopoiskState = {
  favorites: JSON.parse(localStorage.getItem(LS_F_KEY) ?? "[]"),
  user: {},
};

export const KinopoiskSlise = createSlice({
  name: "kinopoisk",
  initialState,
  reducers: {
    setFilms(state, action: PayloadAction<IPayload | []>) {
      //  state.favorites = action?.payload;
    },
    addFavorite(state, action: PayloadAction<IPayload>) {
      state.favorites.push({
        id: action.payload.id,
        filmId: action.payload.filmId,
        season: action.payload.season,
      });
      localStorage.setItem(LS_F_KEY, JSON.stringify(state.favorites));
    },
    removeFavorite(state, action: PayloadAction<IPayload>) {
      state.favorites = state.favorites.filter(
        (i) => i.id !== action.payload.id
      );
      localStorage.setItem(LS_F_KEY, JSON.stringify(state.favorites));
    },
    setSeason(state, action: PayloadAction<IPayload>) {
      state.favorites.map((i) => {
        if (i.id === action.payload.id) {
          return (i.season = action.payload.season);
        } else {
          return i;
        }
      });
      localStorage.setItem(LS_F_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const kinopoiskAction = KinopoiskSlise.actions;
export const kinopoiskReduser = KinopoiskSlise.reducer;
