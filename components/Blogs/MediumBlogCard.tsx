import type { FC } from 'react'

import { Space, Tag } from 'antd'

import Section from 'components/Section'
import BlogHeader from 'components/BlogHeader'

import { MediumBlog } from 'helpers/utils'
import { event } from 'helpers/gtag'

interface MediumBlogCardProps {
  data: MediumBlog
}

const MediumBlogCard: FC<MediumBlogCardProps> = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        event({
          action: 'mediumBlogClick',
          category: 'medium',
          label: data.title,
        })
      }
    >
      <Section>
        <BlogHeader date={data.created} content={data.content} />

        <span className="blog-title">{data.title}</span>
        <p className="blog-description">{data.description}</p>

        <Space>
          {data.category.map((item) => (
            <Tag color="purple" key={item}>
              {item}
            </Tag>
          ))}
        </Space>
      </Section>
    </a>
  )
}

export default MediumBlogCard
