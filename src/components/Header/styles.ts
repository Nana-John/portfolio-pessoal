import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: black;
  color: white;
`

export const Logo = styled.h1`
  font-size: 1.5rem;
`

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`
