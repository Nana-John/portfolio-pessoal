import React from 'react'
import { Container, Title, List, Service } from './styles'

const Services: React.FC = () => {
  return (
    <Container>
      <Title>Meus Serviços</Title>
      <List>
        <Service>Desenvolvimento Front-end</Service>
        <Service>Criação de Sites Responsivos</Service>
        <Service>Otimização de Performance</Service>
      </List>
    </Container>
  )
}

export default Services
