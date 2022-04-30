import Head from 'next/head'

import Content from 'components/Content'
import Footer from 'components/Footer'

import type { FCWithChildren } from 'types'
import { NextSeo } from 'next-seo'

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
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Content>{children}</Content>

      <Footer />
    </>
  )
}

export default HomeLayout
