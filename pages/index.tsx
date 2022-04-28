import type { NextPage } from 'next'

import { Button, Space } from 'antd'
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'

import HomeLayout from 'layouts/HomeLayout'

import WaveAnimation from 'components/WaveAnimation'

const Home: NextPage = () => {
  const links = [
    {
      id: 0,
      to: 'https://www.linkedin.com/in/panupongtipjoi/',
      Icon: LinkedinOutlined,
    },
    {
      id: 1,
      to: 'https://github.com/tchala120',
      Icon: GithubOutlined,
    },
    {
      id: 2,
      to: 'https://www.instagram.com/itstoon.p/',
      Icon: InstagramOutlined,
    },
  ]

  return (
    <HomeLayout>
      <WaveAnimation style={{ fontSize: 36 }}>👋</WaveAnimation>

      <h1>
        Hi folk!{' '}
        <a
          href="https://twitter.com/thetoonishere"
          target="_blank"
          rel="noopener noreferrer"
        >
          @thetoonishere
        </a>
      </h1>

      <Space>
        {links.map(({ id, to, Icon }) => (
          <Button
            key={id}
            icon={
              <a href={to} target="_blank" rel="noopener noreferrer">
                <Icon style={{ fontSize: 24 }} />
              </a>
            }
          />
        ))}
      </Space>
    </HomeLayout>
  )
}

export default Home
