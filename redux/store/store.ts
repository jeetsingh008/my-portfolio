import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "../slices/darkTheme/darkThemeSlice";

export const store = configureStore({
  reducer: {
    darkTheme: darkThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
