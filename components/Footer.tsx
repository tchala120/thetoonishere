import type { FC } from 'react'

import { CopyrightOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import dayjs from 'dayjs'
import styled from '@emotion/styled'

const Footer: FC = () => {
  return (
    <>
      <Space>
        <CopyrightOutlined /> {dayjs().format('YYYY')} Panupong.
      </Space>

      <Version>Version {process.env.NEXT_PUBLIC_VERSION}</Version>
    </>
  )
}

export default Footer

const Version = styled.p`
  margin-top: 8px;
  color: #999;
`
