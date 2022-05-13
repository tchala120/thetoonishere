import type { FC } from 'react'

import Link from 'next/link'

import BlogCard from 'components/BlogCard'

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

export default Blogs
