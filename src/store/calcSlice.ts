import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  currentValue: string;
  operator: string | null;
  previousValue: string | null;
  overwrite: boolean;
}

const initialState: CalculatorState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  overwrite: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputNumber: (state, action: PayloadAction<string>) => {
      if (state.overwrite) {
        state.currentValue = action.payload;
        state.overwrite = false;
      } else {
        state.currentValue =
          state.currentValue === "0"
            ? action.payload
            : state.currentValue + action.payload;
      }
    },
    inputOperator: (state, action: PayloadAction<string>) => {
      if (state.operator && state.previousValue !== null) {
        const prev = parseFloat(state.previousValue);
        const curr = parseFloat(state.currentValue);
        let result = 0;

        switch (state.operator) {
          case "+":
            result = prev + curr;
            break;
          case "-":
            result = prev - curr;
            break;
          case "*":
            result = prev * curr;
            break;
          case "/":
            result = curr !== 0 ? prev / curr : NaN;
            break;
        }
        state.currentValue = result.toString();
        state.previousValue = result.toString();
      } else {
        state.previousValue = state.currentValue;
      }

      state.operator = action.payload;
      state.overwrite = true;
    },
    calculate: (state) => {
      if (state.operator && state.previousValue !== null) {
        const prev = parseFloat(state.previousValue);
        const curr = parseFloat(state.currentValue);
        let result = 0;

        switch (state.operator) {
          case "+":
            result = prev + curr;
            break;
          case "-":
            result = prev - curr;
            break;
          case "*":
            result = prev * curr;
            break;
          case "/":
            result = curr !== 0 ? prev / curr : NaN;
            break;
        }

        state.currentValue = result.toString();
        state.operator = null;
        state.previousValue = null;
        state.overwrite = true;
      }
    },
    clear: (state) => {
      state.currentValue = "0";
      state.operator = null;
      state.previousValue = null;
      state.overwrite = false;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice.reducer;
