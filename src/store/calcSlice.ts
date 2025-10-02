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

    clear: (state) => {
      state.currentValue = "0";
      state.operator = null;
      state.previousValue = null;
    },

    calculate: (state) => {
      if (state.operator && state.previousValue) {
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
            result = prev / curr;
            break;
        }

        state.currentValue = result.toString();
        state.operator = null;
        state.previousValue = null;
      }
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice.reducer;
