import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  currentValue: string;
  operator: string | null;
  previousValue: string | null;
}

const initialState: CalculatorState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputNumber: (state, action: PayloadAction<string>) => {
      state.currentValue =
        state.currentValue === "0"
          ? action.payload
          : state.currentValue + action.payload;
    },
    inputOperator: (state, action: PayloadAction<string>) => {
      state.operator = action.payload;
      state.previousValue = state.currentValue;
      state.currentValue = "0";
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice.reducer;
