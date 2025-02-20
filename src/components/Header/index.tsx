import React from 'react'
import { Container, Logo, Nav, NavItem } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>Mairis.dev</Logo>
      <Nav>
        <NavItem href="#home">Início</NavItem>
        <NavItem href="#portfolio">Portfólio</NavItem>
        <NavItem href="#contact">Contato</NavItem>
      </Nav>
    </Container>
  )
}

export default Header
