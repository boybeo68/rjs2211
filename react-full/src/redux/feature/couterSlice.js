import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 10,
};

const couterSlice = createSlice({
  name: 'couter',
  initialState,
  reducers: {
    increeCount: (state, action) => {
      state.value += 1;
    },
    increeCountWithParams: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increeCount, increeCountWithParams} = couterSlice.actions;

export default couterSlice.reducer;
