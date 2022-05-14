import type { GetStaticProps, NextPage } from 'next'

import dynamic from 'next/dynamic'

import { getAllBlogs, Blog } from 'helpers/blog'
import { getAllMediumBlogs, MediumBlog } from 'helpers/utils'

const Blogs = dynamic(() => import('components/Blogs'))

interface BlogPageProps {
  listBlogs: Blog[]
  listMediumBlogs: MediumBlog[]
}

const BlogPage: NextPage<BlogPageProps> = ({ listBlogs, listMediumBlogs }) => {
  return <Blogs listBlogs={listBlogs} listMediumBlogs={listMediumBlogs} />
}

export default BlogPage

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const listBlogs = getAllBlogs()
  const listMediumBlogs = await getAllMediumBlogs()

  return {
    props: {
      listBlogs,
      listMediumBlogs,
    },
  }
}
