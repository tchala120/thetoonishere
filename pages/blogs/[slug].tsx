import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import 'highlight.js/styles/github-dark.css'

import { ParsedUrlQuery } from 'querystring'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'

import { Blog, getAllBlogs, getBlogContentBySlug } from 'helpers/blog'

const BlogDetail = dynamic(() => import('components/BlogDetail'))

interface BlogDetailPageProps {
  blog: Blog
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ blog, source }) => {
  return <BlogDetail blog={blog} source={source} />
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
  const mdxSource = await serialize(blog.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  })

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
