import type { ComponentType } from 'react'

import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MediumOutlined,
  TwitterOutlined,
} from '@ant-design/icons'

export interface SocialContact {
  id: number
  name: string
  link: string
  Icon: ComponentType<any>
}

export const listSocialContacts: SocialContact[] = [
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
