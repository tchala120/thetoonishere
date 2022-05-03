import type { ComponentType, FC } from 'react'

import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MediumOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import Hero from 'components/Hero'
import About from 'components/About'

import { event } from 'helpers/gtag'

export interface SocialContact {
  id: number
  name: string
  link: string
  Icon: ComponentType<any>
}

const Home: FC = () => {
  const listSocialContacts: SocialContact[] = [
    {
      id: 0,
      name: '@thetoonishere',
      link: 'https://twitter.com/thetoonishere',
      Icon: TwitterOutlined,
    },
    {
      id: 1,
      name: 'panupongtipjoi',
      link: 'https://linkedin.com/in/panupongtipjoi',
      Icon: LinkedinOutlined,
    },
    {
      id: 2,
      name: '@tchala120',
      link: 'https://github.com/tchala120',
      Icon: GithubOutlined,
    },
    {
      id: 3,
      name: '@itstoon.p',
      link: 'https://instagram.com/itstoon.p',
      Icon: InstagramOutlined,
    },
    {
      id: 4,
      name: '@itstoon.panupong',
      link: 'https://medium.com/@itstoon.panupong',
      Icon: MediumOutlined,
    },
  ]

  return (
    <>
      <Hero />

      <About />

      <Space size="large">
        {listSocialContacts.map(({ id, name, link, Icon }) => (
          <Tooltip key={id} title={name}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                event({
                  action: 'socialIconClick',
                  category: 'Social Icon',
                  label: `Click ${name}`,
                  value: id,
                })
              }
            >
              <Icon style={{ fontSize: 32, color: '#3c3c3c' }} />
            </a>
          </Tooltip>
        ))}
      </Space>
    </>
  )
}

export default Home
