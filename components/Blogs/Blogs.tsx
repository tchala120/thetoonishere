import type { FC } from 'react'

import Link from 'next/link'
import { MediumSquareFilled } from '@ant-design/icons'
import { Divider, Space } from 'antd'

import Section from 'components/Section'
import NotFoundContent from 'components/NotFoundContent'
import BlogCard from './BlogCard'
import MediumBlogCard from './MediumBlogCard'

import PageLayout from 'layouts/PageLayout'

import type { Blog } from 'helpers/blog'
import type { MediumBlog } from 'helpers/utils'

interface BlogsProps {
  listBlogs: Blog[]
  listMediumBlogs: MediumBlog[]
}

const Blogs: FC<BlogsProps> = ({ listBlogs, listMediumBlogs }) => {
  return (
    <PageLayout
      title="Blog | thetoonishere"
      description="Technical, lifestyle and more."
    >
      <Section>
        <Section.SubTitle>
          <Space size="large">
            From Medium <MediumSquareFilled />
          </Space>
        </Section.SubTitle>

        {listMediumBlogs.map((item) => (
          <MediumBlogCard key={item.created} data={item} />
        ))}
      </Section>

      {renderListBlogs()}
    </PageLayout>
  )

  function renderListBlogs() {
    if (listBlogs.length === 0) {
      return <NotFoundContent />
    }

    return (
      <>
        <Divider />

        <Section>
          {listBlogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
              <a>
                <BlogCard blog={blog} />
              </a>
            </Link>
          ))}
        </Section>
      </>
    )
  }
}

export default Blogs
