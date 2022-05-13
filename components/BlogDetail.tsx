import type { FC } from 'react'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Blog } from 'helpers/blog'

import { H1 } from './MDX'

import PageLayout from 'layouts/PageLayout'

interface BlogDetailProps {
  blog: Blog
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}

const BlogDetail: FC<BlogDetailProps> = ({ blog, source }) => {
  return (
    <PageLayout title={blog.title} description={blog.excerpt}>
      <MDXRemote
        {...source}
        components={{
          h1: (props) => <H1 {...props} />,
        }}
      />
    </PageLayout>
  )
}

export default BlogDetail
