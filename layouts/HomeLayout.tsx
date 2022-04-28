import Head from 'next/head'
import styled from 'styled-components'

import type { FCWithChildren } from 'types'

const HomeLayout: FCWithChildren = ({ children }) => {
  return (
    <HomeContainer>
      <Head>
        <title>👋 Hi folk! | thetoonishere</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {children}
    </HomeContainer>
  )
}

export default HomeLayout

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
