import readingTime from 'reading-time'
import parse from 'rss-to-json'

export interface MediumBlog {
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

    return rss.items.map(removeUndefinedObject).filter(Boolean)
  } catch {
    return []
  }
}
