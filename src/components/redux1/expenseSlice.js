import {createSlice} from '@reduxjs/toolkit';
export const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    exp: [],
  },
  reducers: {
    add_expenses: (state, action) => {
      state.exp.push(action.payload);
    },
  },
});

export const {add_expenses} = expenseSlice.actions;

export default expenseSlice.reducer;
