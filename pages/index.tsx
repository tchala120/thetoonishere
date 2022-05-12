import type { NextPage } from 'next'

import HomeLayout from 'layouts/HomeLayout'

import Hero from 'components/Hero'
import About from 'components/About'

const HomePage: NextPage = () => {
  return (
    <HomeLayout>
      <Hero />

      <About />
    </HomeLayout>
  )
}

export default HomePage
