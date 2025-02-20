import styled from 'styled-components'

export const Container = styled.section`
  padding: 40px;
`

export const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`

export const Project = styled.div`
  background: lightgray;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
`
