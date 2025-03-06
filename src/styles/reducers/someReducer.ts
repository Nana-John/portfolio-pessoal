// src/redux/someReducers.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definindo o tipo para o estado
interface SomeState {
  exampleField: string // A propriedade exampleField deve ser definida aqui
}

// Estado inicial
const initialState: SomeState = {
  exampleField: '', // Valor inicial da propriedade exampleField
}

// Criando o slice do Redux
const someSlice = createSlice({
  name: 'someState',
  initialState,
  reducers: {
    updateExampleField(state, action: PayloadAction<string>) {
      state.exampleField = action.payload // Atualizando o exampleField no estado
    },
  },
})

// Exportando as ações do slice
export const { updateExampleField } = someSlice.actions

// Exportando o reducer
export default someSlice.reducer
