import Head from 'next/head'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'

import Footer from 'components/Footer'

import type { FCWithChildren } from 'types'

interface HomeLayoutProps {
  title?: string
  description?: string
}

const HomeLayout: FCWithChildren<HomeLayoutProps> = ({
  title = 'Hi! | thetoonishere',
  description = "Toon's personal website",
  children,
}) => {
  return (
    <HomeLayoutContainer>
      <NextSeo title={title} description={description} />

      <Head>
        <title>👋 Hi! | thetoonishere</title>
        <link rel="shortcut icon" href="/favicon.webp" />
      </Head>

      {children}

      <Footer />
    </HomeLayoutContainer>
  )
}

export default HomeLayout

const HomeLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 768px;
  text-align: center;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`
