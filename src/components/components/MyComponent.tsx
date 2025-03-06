// src/components/components/MyComponent.tsx
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../styles/redux/store' // Importando RootState

export const MyComponent: React.FC = () => {
  // Selecionando a propriedade exampleField do estado
  const exampleField = useSelector(
    (state: RootState) => state.someState.exampleField
  )

  return <div>{exampleField}</div> // Exibindo o valor de exampleField
}
