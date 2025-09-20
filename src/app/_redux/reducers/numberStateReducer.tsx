import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    number:0
}

const numberReducer = createSlice({
  name: 'NumberReducer',
  initialState,
  reducers: {
      increment: (state,action:PayloadAction<number>) => {
          state.number = action.payload;
      },
      decrement: (state,action:PayloadAction<number>) => {
          state.number = action.payload;
      },
      setNumber: (state, action:PayloadAction<number>) => {
          state.number = action.payload;
      }
  }
});

export const { increment, decrement, setNumber } = numberReducer.actions

export default numberReducer.reducer