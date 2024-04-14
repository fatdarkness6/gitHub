import { configureStore } from '@reduxjs/toolkit'
import { ss1 } from './slice/slice1'

export  const reduxStore =  configureStore({
  reducer: {
    profile: ss1,
  }
})