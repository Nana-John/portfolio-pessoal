// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/index' // importando o rootReducer que está no src/styles/index.ts

const store = configureStore({
  reducer: rootReducer,
})

export default store
