import type { FC } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { ParsedUrlQuery } from 'querystring'

import { useEffect } from 'react'

import Section from 'components/Section'

import HomeLayout from 'layouts/HomeLayout'

import {
  getAllMediumBlogs,
  getMediumBlogBySlug,
  MediumBlog,
} from 'helpers/utils'

interface MediumRedirectPageProps {
  mediumBlog?: MediumBlog
}

const MediumRedirectPage: FC<MediumRedirectPageProps> = ({ mediumBlog }) => {
  useEffect(() => {
    setTimeout(() => {
      window.open(mediumBlog?.link, '_self')
    }, 2000)
  })

  if (mediumBlog == null) {
    return null
  }

  return (
    <HomeLayout
      title={mediumBlog.title}
      description={mediumBlog.description}
      footer={false}
    >
      <Section>
        <p>We&apos;ll bring you to the medium article</p>
        <Section.Title>{mediumBlog.title}</Section.Title>
      </Section>
    </HomeLayout>
  )
}

export default MediumRedirectPage

interface MediumBlogParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<
  MediumRedirectPageProps,
  MediumBlogParams
> = async ({ params }) => {
  const mediumBlog = await getMediumBlogBySlug(params?.slug)

  return {
    props: {
      mediumBlog,
    },
  }
}

export const getStaticPaths: GetStaticPaths<MediumBlogParams> = async () => {
  const listMediumBlogs = await getAllMediumBlogs()

  const paths = listMediumBlogs.map((item) => ({
    params: {
      slug: item.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
