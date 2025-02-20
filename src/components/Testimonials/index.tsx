import React from 'react'
import { Container, Title, Testimonial } from './styles'

const Testimonials: React.FC = () => {
  return (
    <Container>
      <Title>Depoimentos</Title>
      <Testimonial>
        `&quot;`Ótimo trabalho! Muito profissional.`&quot;`
      </Testimonial>
      <Testimonial>
        `&quot;`Criatividade e qualidade impecáveis!`&quot;`
      </Testimonial>
    </Container>
  )
}

export default Testimonials
