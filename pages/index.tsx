import type { NextPage } from 'next'

import { Button } from 'antd'
import Link from 'next/link'

import HomeLayout from 'layouts/HomeLayout'

import Hero from 'components/Hero'
import About from 'components/About'
import Section from 'components/Section'

const HomePage: NextPage = () => {
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

export default HomePage
