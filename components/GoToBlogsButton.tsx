import type { FC } from 'react'

import { Button } from 'antd'
import Link from 'next/link'

import Section from 'components/Section'

const GoToBlogsButton: FC = () => {
  return (
    <Section>
      <Link href="/blogs">
        <a>
          <Button type="primary">Go to Blogs</Button>
        </a>
      </Link>
    </Section>
  )
}

export default GoToBlogsButton
