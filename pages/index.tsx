import type { NextPage } from 'next'

import HomeLayout from 'layouts/HomeLayout'

import Hero from 'components/Hero'
import About from 'components/About'
import Instagram from 'components/Instagram'
import Project from 'components/Project'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Hero />

      <About />

      <Instagram />

      <Project />
    </HomeLayout>
  )
}

export default Home
