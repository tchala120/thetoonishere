import Head from 'next/head'
import Script from 'next/script'
import { NextSeo } from 'next-seo'

import Content from 'components/Content'
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
    <>
      <NextSeo title={title} description={description} />

      <Head>
        <title>👋 Hi! | thetoonishere</title>
        <link rel="shortcut icon" href="/favicon.webp" />
      </Head>

      <Content>{children}</Content>

      <Footer />
    </>
  )
}

export default HomeLayout
