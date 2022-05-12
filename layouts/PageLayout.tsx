import { NextSeo } from 'next-seo'
import Head from 'next/head'
import styled from '@emotion/styled'

import Footer from 'components/Footer'

import type { BaseLayoutProps, FCWithChildren } from 'types'

const PageLayout: FCWithChildren<BaseLayoutProps> = ({
  title = '👋 Hi! | thetoonishere',
  description = "Toon's personal website",
  children,
}) => {
  return (
    <PageLayoutContainer>
      <NextSeo title={title} description={description} />

      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />

        <link rel="shortcut icon" href="/favicon.webp" />
      </Head>

      {children}

      <Footer />
    </PageLayoutContainer>
  )
}

export default PageLayout

const PageLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 768px;
  padding: 50px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`
