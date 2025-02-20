// redux/reducers/otherReducer.ts
import { createSlice } from '@reduxjs/toolkit'

// Definição do tipo do estado
interface ThemeState {
  darkMode: boolean
}

// Estado inicial
const initialState: ThemeState = {
  darkMode: false,
}

// Criando o reducer
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

// Exportando as actions e o reducer
export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
