import type { GetStaticProps, NextPage } from 'next'

import { Col, Row } from 'antd'

import PageLayout from 'layouts/PageLayout'

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
      <Row>
        {blogs.map((blog) => (
          <Col key={blog.slug} span={24}>
            <h1>{blog.title}</h1>
          </Col>
        ))}
      </Row>
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
