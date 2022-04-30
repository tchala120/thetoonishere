import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'

import Image from 'next/image'
import { Space } from 'antd'

import HomeLayout from 'layouts/HomeLayout'

import Hero from 'components/Hero'
import About from 'components/About'
import Instagram from 'components/Instagram'
import Project from 'components/Project'

import {
  getListInstagramPosts,
  InstagramAPIResponse,
} from './api/list-instagram-posts'

interface HomeProps {
  listInstagramPosts: InstagramAPIResponse[]
}

const Home: NextPage<HomeProps> = ({ listInstagramPosts }) => {
  return (
    <HomeLayout>
      <Space>
        <Image src="/favicon.webp" alt="Panupong" width={64} height={64} />
        <Image
          src="https://scontent.cdninstagram.com/v/t51.29350-15/121709813_104503418057733_7809674863864946371_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=X93ZgSnPAlUAX_ffrYT&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-1sBjzsVRMVTZMTIvpyETeInz-g50Jw9sYUPA_RVtxBg&oe=6272BA00"
          alt="Democracy"
          width={64}
          height={64}
          objectFit="cover"
        />
      </Space>

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
