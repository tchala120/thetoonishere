import readingTime from 'reading-time'
import parse from 'rss-to-json'
import { paramCase } from 'change-case'

export const isProduction = process.env.VERCEL_ENV === 'production'

export interface MediumBlog {
  slug: string
  title: string
  description?: string
  link: string
  author: string
  published: number
  created: number
  category: string[]
  content: string
}

export const getBlogReadingTime = (content: string) => {
  const text = content.replace(/<[^>]+>/g, '')

  return readingTime(text)
}

export const removeUndefinedObject = <T extends object>(data: T): T => {
  const cloneObject: T = {
    ...data,
  }
  const keys = Object.keys(data) as (keyof T)[]

  keys.forEach((key) => {
    if (cloneObject[key] == null) {
      delete cloneObject[key]
    }
  })

  return cloneObject
}

export const getAllMediumBlogs = async (): Promise<MediumBlog[]> => {
  try {
    const rss = await parse('https://medium.com/feed/@thetoonishere', {})

    const listMediumBlogs: MediumBlog[] = rss.items.map((item) => ({
      ...item,
      slug: paramCase(item.title),
    }))

    return listMediumBlogs.map(removeUndefinedObject).filter(Boolean)
  } catch {
    return []
  }
}

export const getMediumBlogBySlug = async (
  slug?: string
): Promise<MediumBlog | undefined> => {
  const listMediumBlogs = await getAllMediumBlogs()

  const mediumBlog = listMediumBlogs.find((item) => item.slug === slug)

  return mediumBlog
}
