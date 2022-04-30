import type { FC } from 'react'

import { Space } from 'antd'
import styled from 'styled-components'

import Section from 'components/Section'
import WaveAnimation from 'components/WaveAnimation'

const Hero: FC = () => {
  return (
    <Section>
      <Space size="large">
        <WaveAnimation style={{ fontSize: 80 }}>👋</WaveAnimation>
        <GreetingText>Hi!</GreetingText>
      </Space>
    </Section>
  )
}

export default Hero

const GreetingText = styled.span`
  font-size: 80px;
  font-weight: 900;
`
