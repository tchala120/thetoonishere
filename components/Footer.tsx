import type { FC } from 'react'

import { CopyrightOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import dayjs from 'dayjs'
import styled from '@emotion/styled'

import SocialContact from 'components/SocialContact'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <SocialContact />

      <Space>
        <CopyrightOutlined /> {dayjs().format('YYYY')} Panupong.
      </Space>

      <Version>Version {process.env.NEXT_PUBLIC_VERSION}</Version>
    </FooterContainer>
  )
}

export default Footer

const Version = styled.p`
  margin-top: 8px;
  color: #999;
`

const FooterContainer = styled.div`
  text-align: center;
`
