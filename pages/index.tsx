import type { NextPage } from 'next'

import dynamic from 'next/dynamic'

const HomeLayout = dynamic(() => import('layouts/HomeLayout'))
const Hero = dynamic(() => import('components/Hero'))
const About = dynamic(() => import('components/About'))
const GoToBlogsButton = dynamic(() => import('components/GoToBlogsButton'))

const HomePage: NextPage = () => {
  return (
    <HomeLayout>
      <Hero />

      <About />

      <GoToBlogsButton />
    </HomeLayout>
  )
}

export default HomePage
