import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { ParsedUrlQuery } from 'querystring'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import PageLayout from 'layouts/PageLayout'

import { Blog, getAllBlogs, getBlogContentBySlug } from 'helpers/blog'

interface BlogDetailPageProps {
  blog: Blog
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog, source }) => {
  return (
    <PageLayout title={blog.title} description={blog.excerpt}>
      <MDXRemote {...source} />
    </PageLayout>
  )
}

export default BlogDetailPage

interface BlogParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<
  BlogDetailPageProps,
  BlogParams
> = async ({ params }) => {
  const blog = getBlogContentBySlug(params?.slug || '')
  const mdxSource = await serialize(blog.content)

  return {
    props: {
      blog,
      source: mdxSource,
    },
  }
}

export const getStaticPaths: GetStaticPaths<BlogParams> = () => {
  const paths = getAllBlogs().map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
