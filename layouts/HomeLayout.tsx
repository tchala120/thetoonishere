import Head from 'next/head'

import Content from 'components/Content'
import Footer from 'components/Footer'

import type { FCWithChildren } from 'types'

const HomeLayout: FCWithChildren = ({ children }) => {
  return (
    <>
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
