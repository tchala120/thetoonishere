import type { FC } from 'react'

import { Space } from 'antd'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

import { getBlogReadingTime } from 'helpers/utils'
import { DATE_TIME_FORMAT } from 'helpers/formatter'

interface BlogHeaderProps {
  date: number
  content: string
}

const BlogHeader: FC<BlogHeaderProps> = ({ date, content }) => {
  const readingTime = getBlogReadingTime(content)

  return (
    <BlogHeaderContainer>
      <small className="date">{dayjs(date).format(DATE_TIME_FORMAT)}</small>
      <small className="reading-time">
        <Space>☕️ {readingTime.text}</Space>
      </small>
    </BlogHeaderContainer>
  )
}

export default BlogHeader

const BlogHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .date {
    font-weight: bold;
  }
`
