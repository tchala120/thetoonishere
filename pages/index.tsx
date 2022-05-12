import HomeLayout from 'layouts/HomeLayout'

import Hero from 'components/Hero'
import About from 'components/About'

import type { NextPageWithLayout } from 'types'

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Hero />

      <About />
    </>
  )
}

export default HomePage

HomePage.withLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>
}
