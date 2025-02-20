// redux/reducers/userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definição do tipo do estado do usuário
interface UserState {
  name: string
  email: string
  isAuthenticated: boolean
}

// Estado inicial
const initialState: UserState = {
  name: '',
  email: '',
  isAuthenticated: false,
}

// Criando o reducer usando createSlice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.name = ''
      state.email = ''
      state.isAuthenticated = false
    },
  },
})

// Exportando as actions e o reducer
export const { login, logout } = userSlice.actions
export default userSlice.reducer
