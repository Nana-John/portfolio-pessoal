// src/redux/store.tsx
import { configureStore } from '@reduxjs/toolkit'
import someReducer from './../reducers/someReducer' // Importando o reducer

// Criando a store com o Redux Toolkit
const store = configureStore({
  reducer: {
    someState: someReducer,
  },
})

// Definindo o tipo RootState
export type RootState = ReturnType<typeof store.getState> // Tipo do estado global

// Definindo o tipo AppDispatch
export type AppDispatch = typeof store.dispatch // Tipo do dispatch

// Exportando a store
export default store
