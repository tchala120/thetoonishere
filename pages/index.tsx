import HomeLayout from 'layouts/HomeLayout'

import Home from 'components/Home'

import type { NextPageWithLayout } from 'types'

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  )
}

export default HomePage

HomePage.withLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>
}
