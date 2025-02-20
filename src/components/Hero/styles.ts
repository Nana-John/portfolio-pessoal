import styled from 'styled-components'

export const Container = styled.section`
  padding: 50px;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: gray;
`

export const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: green;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: darkgreen;
  }
`
