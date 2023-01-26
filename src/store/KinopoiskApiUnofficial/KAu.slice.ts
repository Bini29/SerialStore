import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_F_KEY = "rfc";

interface KinopoiskState {
  favorites: { id: number; season: number }[];
}
interface IPayload {
  id: number;
  season: number;
}
const initialState: KinopoiskState = {
  favorites: JSON.parse(localStorage.getItem(LS_F_KEY) ?? "[]"),
};

export const KinopoiskSlise = createSlice({
  name: "kinopoisk",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IPayload>) {
      state.favorites.push({
        id: action.payload.id,
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
