import type { NextPage } from 'next'

import { Space } from 'antd'
import styled from 'styled-components'

import HomeLayout from 'layouts/HomeLayout'

import WaveAnimation from 'components/WaveAnimation'
import Instagram from 'components/Instagram'
import Section from 'components/Section'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Space size="large">
        <WaveAnimation style={{ fontSize: 80 }}>👋</WaveAnimation>
        <GreetingText>Hi!</GreetingText>
      </Space>

      <Section>
        My name is <strong>Toon</strong>, and here is my portfolio, which
        showcases everything I&apos;ve done in my spare time. My ambition is to
        work as a website developer since I enjoy coding.
      </Section>

      <Instagram />
    </HomeLayout>
  )
}

export default Home

const GreetingText = styled.span`
  font-size: 80px;
  font-weight: 900;
`
