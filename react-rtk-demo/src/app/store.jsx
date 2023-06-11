import { configureStore} from '@reduxjs/toolkit'
import  cakeReducer from '../features/cake/cakeSlice'
import  icecreamReducer from '../features/icecream/icecreamSlice'
import  userReducer from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user:userReducer
  },
  // since redux toolkit already has some default middlewares we are simply appending on to them
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store