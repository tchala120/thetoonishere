import Head from 'next/head'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'

import Footer from 'components/Footer'

import type { BaseLayoutProps, FCWithChildren } from 'types'

const HomeLayout: FCWithChildren<BaseLayoutProps> = ({
  title = 'Hi!',
  description = "Toon's personal website",
  footer = true,
  children,
}) => {
  return (
    <HomeLayoutContainer>
      <NextSeo title={`${title} | thetoonishere`} description={description} />

      <Head>
        <title>{`${title} | thetoonishere`}</title>
        <link rel="shortcut icon" href="/favicon.webp" />
      </Head>

      {children}

      {footer && <Footer />}
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
