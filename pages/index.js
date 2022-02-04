import styled, { keyframes } from "styled-components"

export default function Home() {
  return (
    <Container>
      <ContentArea>
        <Title>
          <Text> Sleep. </Text>
          <Text> Code. </Text>
          <Text> Repeat. </Text>
        </Title>
      </ContentArea>
    </Container>
  )
}

const colorCycle = keyframes`
    0%, 
    55 % {
      filter: brightness(0) invert(1)
    }
    11%, 
    33% {
      filter: none
    }
`

const Container = styled.main`
    font-family: 'Arial', sans-serif;
    background-color: #000;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
  `

const ContentArea = styled.section`
    padding: 2rem;
  `

const Title = styled.h1`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-weight: 800;
    font-size: 4rem;
    line-height: 4.2rem;
    letter-spacing: -.45rem;
  `

const Text = styled.span`
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(0) invert(1);

    animation: ${colorCycle} 5s ease-in-out infinite;

    &:nth-child(1){
      background-image: linear-gradient(90deg, #007cf0, #00dfd8)
    }
    &:nth-child(2){
      background-image: linear-gradient(90deg, #7928ca, #ff0080);
      animation-delay: 1.8s;
    }
    &:nth-child(3){
      background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
      animation-delay: 3.6s;
    }
`