import type { FC } from 'react'

import { Button } from 'antd'
import Link from 'next/link'

import Section from 'components/Section'
import About from './About'
import Hero from './Hero'

import HomeLayout from 'layouts/HomeLayout'

const Home: FC = () => {
  return (
    <HomeLayout>
      <Hero />

      <About />

      <Section>
        <Link href="/blogs">
          <a>
            <Button type="primary">Go to Blogs</Button>
          </a>
        </Link>
      </Section>
    </HomeLayout>
  )
}

export default Home
