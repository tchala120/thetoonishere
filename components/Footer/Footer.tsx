import type { FC } from 'react'

import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MediumOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import { Button, Space, Tooltip } from 'antd'
import styled from 'styled-components'

import Container from 'components/Container'

import type { SocialContact } from './types'

const Footer: FC = () => {
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
    <Container>
      <Space>
        {listSocialContacts.map(({ id, name, link, Icon }) => (
          <Tooltip key={id} title={name}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button type="text" icon={<Icon style={{ fontSize: 24 }} />} />
            </a>
          </Tooltip>
        ))}
      </Space>

      <CopyRight>Copyright © 2022 Panupong. All rights reserved.</CopyRight>
    </Container>
  )
}

export default Footer

const CopyRight = styled.p`
  margin: 24px 0;
  color: #8c8c8c;
`
