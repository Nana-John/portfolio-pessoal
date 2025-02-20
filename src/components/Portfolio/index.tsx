import React from 'react'
import { Container, Title, Grid, Project } from './styles'

const Portfolio: React.FC = () => {
  return (
    <Container>
      <Title>Meu Portfólio</Title>
      <Grid>
        <Project>Projeto 1</Project>
        <Project>Projeto 2</Project>
        <Project>Projeto 3</Project>
      </Grid>
    </Container>
  )
}

export default Portfolio
