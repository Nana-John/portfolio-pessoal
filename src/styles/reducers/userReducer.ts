import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definição do estado inicial
const initialState = {
  name: '',
  email: '',
  isAuthenticated: false,
}

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
