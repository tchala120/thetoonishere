import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const wave = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`

const WaveAnimation = styled.div`
  display: inline-block;
  transform-origin: 70% 70%;
  animation-name: ${wave};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`

export default WaveAnimation
