import type { FC } from 'react'

import Section from 'components/Section'
import BlogHeader from 'components/BlogHeader'

import type { Blog } from 'helpers/blog'

interface BlogCardProps {
  blog: Blog
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Section>
      <BlogHeader date={blog.date} content={blog.content} />

      <span className="blog-title">{blog.title}</span>
      <p className="blog-description">{blog.excerpt}</p>
    </Section>
  )
}

export default BlogCard
