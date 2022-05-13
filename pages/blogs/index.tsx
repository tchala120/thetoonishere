import type { GetStaticProps, NextPage } from 'next'

import dynamic from 'next/dynamic'

import { getAllBlogs, Blog } from 'helpers/blog'

const Blogs = dynamic(() => import('components/Blogs'))

interface BlogPageProps {
  blogs: Blog[]
}

const BlogPage: NextPage<BlogPageProps> = ({ blogs }) => {
  return <Blogs blogs={blogs} />
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
