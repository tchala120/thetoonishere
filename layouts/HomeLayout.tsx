import Head from 'next/head'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'

import Footer from 'components/Footer'

import { meta } from 'constants/meta'

import type { BaseLayoutProps, FCWithChildren } from 'types'

const HomeLayout: FCWithChildren<BaseLayoutProps> = ({
  title = meta.title,
  description = meta.description,
  footer = true,
  children,
}) => {
  const seoTitle = `${title} | thetoonishere`

  return (
    <HomeLayoutContainer>
      <NextSeo title={seoTitle} description={description} />

      <Head>
        <title>{seoTitle}</title>

        <meta name="description" content={description} />

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
