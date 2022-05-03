import type { NextPage } from 'next'

import HomeLayout from 'layouts/HomeLayout'

import Home from 'components/Home'

const HomePage: NextPage = () => {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  )
}

export default HomePage
