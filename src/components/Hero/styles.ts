import styled from 'styled-components'
import { theme } from './../../theme' // Supondo que o tema esteja em src/theme.ts

export const HeroContainer = styled.section`
  background-color: ${theme.colors
    .primary}; // Cor de fundo definida como primary
  padding-top: 41px;
  height: 939px;
  position: relative;
  overflow: hidden;
`

export const HeroContent = styled.div`
  position: absolute;
  top: 371px;
  left: 257px;
  right: 513px;
  bottom: 309px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const HeroText = styled.h1`
  font-size: 60px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: white;
`

export const HeroButton = styled.button`
  font-size: 17px;
  font-family: 'Poppins', sans-serif;
  font-weight: regular;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 20px;
  margin-top: 60px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${theme.colors.primary};
  }
`

export const HeroImage = styled.img`
  position: absolute;
  right: 1108px;
  top: 595px;
  width: 372px;
  height: 437px;
`

export const HeroSecondaryImage = styled.img`
  position: absolute;
  top: 595px;
  left: 211px;
  width: 1115.35px;
  height: 807.76px;
`
