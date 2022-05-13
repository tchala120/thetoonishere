import type { GetStaticProps, NextPage } from 'next'

import Link from 'next/link'
import { Col, Row } from 'antd'

import PageLayout from 'layouts/PageLayout'

import BlogCard from 'components/BlogCard'

import { getAllBlogs, Blog } from 'helpers/blog'

interface BlogPageProps {
  blogs: Blog[]
}

const BlogPage: NextPage<BlogPageProps> = ({ blogs }) => {
  return (
    <PageLayout
      title="Blog | thetoonishere"
      description="Technical, lifestyle and more."
    >
      {blogs.map((blog) => (
        <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
          <a>
            <BlogCard blog={blog} />
          </a>
        </Link>
      ))}
    </PageLayout>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps<BlogPageProps> = () => {
  const blogs = getAllBlogs()

  return {
    props: {
      blogs,
    },
  }
}
