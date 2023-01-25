import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_F_KEY = "rfc";

interface KinopoiskState {
  favorites: number[];
}

const initialState: KinopoiskState = {
  favorites: JSON.parse(localStorage.getItem(LS_F_KEY) ?? "[]"),
};

export const KinopoiskSlise = createSlice({
  name: "kinopoisk",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<number>) {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_F_KEY, JSON.stringify(state.favorites));
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter((i) => i !== action.payload);
      localStorage.setItem(LS_F_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const kinopoiskAction = KinopoiskSlise.actions;
export const kinopoiskReduser = KinopoiskSlise.reducer;
