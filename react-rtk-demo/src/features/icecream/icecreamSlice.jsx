import { createSlice } from "@reduxjs/toolkit";

import  {order as cakeorder} from '../cake/cakeSlice'
const initialState = {
  noOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    order: (state, action) => {
      state.noOfIcecream -= action.payload;
    },
    restock: (state, action) => {
      state.noOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/order"]: (state) => {
  //     state.noOfIcecream--;
  //   },
  // },

  // allows reducers to reapond to action types other than the ones it has created
  extraReducers: (builder) => {
    builder.addCase(cakeorder, (state) => {
      state.noOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { order, restock } = icecreamSlice.actions;

