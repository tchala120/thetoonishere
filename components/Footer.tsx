import type { FC } from 'react'

import { CopyrightOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import dayjs from 'dayjs'

const Footer: FC = () => {
  return (
    <Space>
      <CopyrightOutlined /> {dayjs().format('YYYY')} Panupong
    </Space>
  )
}

export default Footer
