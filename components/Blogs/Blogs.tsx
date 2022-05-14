import type { FC } from 'react'

import Link from 'next/link'

import NotFoundContent from 'components/NotFoundContent'
import BlogCard from './BlogCard'

import PageLayout from 'layouts/PageLayout'

import type { Blog } from 'helpers/blog'

interface BlogsProps {
  blogs: Blog[]
}

const Blogs: FC<BlogsProps> = ({ blogs }) => {
  return (
    <PageLayout
      title="Blog | thetoonishere"
      description="Technical, lifestyle and more."
    >
      {renderListBlogs()}
    </PageLayout>
  )

  function renderListBlogs() {
    if (blogs.length === 0) {
      return (
        <NotFoundContent>
          <h1>Blog will be update soon.</h1>
        </NotFoundContent>
      )
    }

    return blogs.map((blog) => (
      <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
        <a>
          <BlogCard blog={blog} />
        </a>
      </Link>
    ))
  }
}

export default Blogs
