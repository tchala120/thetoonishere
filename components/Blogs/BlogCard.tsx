import type { FC } from 'react'

import dayjs from 'dayjs'
import styled from '@emotion/styled'

import Section from 'components/Section'

import { getBlogReadingTime } from 'helpers/utils'

import { DATE_TIME_FORMAT } from 'helpers/formatter'

import type { Blog } from 'helpers/blog'

interface BlogCardProps {
  blog: Blog
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  const readingTime = getBlogReadingTime(blog.content)

  return (
    <Section>
      <BlogHeader>
        <small className="date">
          {dayjs(blog.date).format(DATE_TIME_FORMAT)}
        </small>
        <small className="reading-time">☕️ {readingTime.text}</small>
      </BlogHeader>

      <BlogTitle>{blog.title}</BlogTitle>
      <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
    </Section>
  )
}

export default BlogCard

const BlogHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .date {
    font-weight: bold;
  }
`

const BlogTitle = styled.span`
  display: block;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 16px;
  color: #3c3c3c;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`

const BlogExcerpt = styled.p`
  font-size: 14px;
`
