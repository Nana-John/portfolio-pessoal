import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme' // Certifique-se de que o caminho está correto
import Hero from './components/Hero' // Certifique-se de que o caminho está correto
import { MyComponent } from '../src/components/components/MyComponent' // Ajuste o caminho conforme necessário

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hero /> {/* Corrigido para a sintaxe de auto fechamento */}
      <MyComponent />
    </ThemeProvider>
  )
}

export default App
