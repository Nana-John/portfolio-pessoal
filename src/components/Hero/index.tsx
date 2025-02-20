import React from 'react'
import { Container, Title, Subtitle, Button } from './styles'

const Hero: React.FC = () => {
  return (
    <Container>
      <Title>Transformando ideias em experiências digitais memoráveis</Title>
      <Subtitle>Desenvolvimento Front-end com qualidade e inovação</Subtitle>
      <Button href="#contact">Entre em Contato</Button>
    </Container>
  )
}

export default Hero
