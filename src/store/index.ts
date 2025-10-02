import { configureStore } from "@reduxjs/toolkit";

// redicers
import calcReducer from "./calcSlice"; 

export const store = configureStore({
  reducer: {
    calculator: calcReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
