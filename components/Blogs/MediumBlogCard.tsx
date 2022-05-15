import type { FC } from 'react'

import Link from 'next/link'
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
    <Link href={`/medium-redirect/${data.slug}`}>
      <a
        onClick={() =>
          event({
            action: 'medium_blog',
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
    </Link>
  )
}

export default MediumBlogCard
