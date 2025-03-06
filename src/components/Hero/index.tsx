// src/components/Hero.tsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../styles/redux/store'
import {
  HeroContainer,
  HeroContent,
  HeroText,
  HeroButton,
  HeroImage,
  HeroSecondaryImage,
} from './styles'

const Hero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector<RootState, { exampleField: string }>(
    (state) => state.someState
  )

  const handleClick = () => {
    dispatch({ type: 'UPDATE_VALUE', payload: 'Novo Valor' })
  }

  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>Designer de UI Criativa & Desenvolvedora Front-End </HeroText>
        <HeroButton onClick={handleClick}>Atualizar Valor</HeroButton>
        <p>{state.exampleField}</p>
      </HeroContent>
      <HeroImage src="public/fig_01.png" alt="Hero Image" />
      <HeroSecondaryImage src="public/fig_02.png" alt="Secondary Hero Image" />
    </HeroContainer>
  )
}

export default Hero
