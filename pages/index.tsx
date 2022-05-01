import type { GetServerSideProps, NextPage } from 'next'

import HomeLayout from 'layouts/HomeLayout'

import Hero from 'components/Hero'
import About from 'components/About'
import Instagram from 'components/Instagram'
import Project from 'components/Project'

import { getListInstagramPosts, InstagramAPIResponse } from 'helpers/instagram'

interface HomeProps {
  listInstagramPosts?: InstagramAPIResponse[]
}

const Home: NextPage<HomeProps> = ({ listInstagramPosts }) => {
  return (
    <HomeLayout>
      <Hero />

      <About />

      <Instagram listInstagramPosts={listInstagramPosts} />

      <Project />
    </HomeLayout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const listInstagramPosts = await getListInstagramPosts()

  return {
    props: {
      listInstagramPosts,
    },
  }
}
