import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  noOfCakes:10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    // keys will automatically be transformed into actions
    order: (state, action) => {
      state.noOfCakes  -= action.payload
    },
    restock: (state, action) => {
      state.noOfCakes += action.payload
      
    }
  }
})

export default cakeSlice.reducer
export const { order, restock } = cakeSlice.actions
