import { createSlice } from "@reduxjs/toolkit";

type themeState = {
  mode: "dark" | "light";
};

const initialState: themeState = {
  mode: "dark",
};

export const darkThemeSlice = createSlice({
  name: "darkTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setLightTheme: (state) => {
      state.mode = "light";
    },
    setDarkTheme: (state) => {
      state.mode = "dark";
    },
  },
});

export const { toggleTheme, setLightTheme, setDarkTheme } =
  darkThemeSlice.actions;
export default darkThemeSlice.reducer;
