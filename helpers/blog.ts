import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { sync } from 'glob'

interface Author {
  name: string
  picture: string
}

export interface Blog {
  slug: string
  title: string
  excerpt: string
  date: number
  author: Author
  content: string
}

const blogsDirectory = join(process.cwd(), 'blogs')

const getBlogsFullPath = (): string[] => {
  try {
    return sync(`${blogsDirectory}/*.mdx`)
  } catch {
    return []
  }
}

export const getBlogSlug = (fullPath: string) => {
  const matches = fullPath.match(/([^\/]*$)/)

  return matches?.[0] ? matches[0].replace(/\.mdx$/, '') : ''
}

export const getBlogContentBySlug = (fullPath: string): Blog => {
  const slug = getBlogSlug(fullPath)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContent)

  const blog: Blog = {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    author: data.author,
    content,
  }

  return blog
}

export const getAllBlogs = () => {
  const fullPaths = getBlogsFullPath()

  return fullPaths.map(getBlogContentBySlug).sort((a, b) => a.date - b.date)
}
