import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

interface Author {
  name: string
  picture: string
}

export interface Post {
  key: string
  title: string
  excerpt: string
  coverImage: string
  date: number
  author: Author
  content: string
}

type PostFields = (keyof Post)[]

const postsDirectory = join(process.cwd(), 'posts')

export const getPostFileNames = () => {
  try {
    return fs.readdirSync(postsDirectory)
  } catch {
    return []
  }
}

export const getPostByKey = (
  fileName: string,
  fields: PostFields = []
): Post => {
  const key = fileName.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${key}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  const { data, content } = matter(fileContents)

  const post: any = {}

  fields.forEach((item) => {
    if (item === 'key') {
      post.key = key
    }

    if (item === 'content') {
      post.content = content
    }

    if (typeof data[item] !== 'undefined') {
      post[item] = data[item]
    }
  })

  return post
}

export const getAllPosts = (fields: PostFields = []) => {
  const listPostFileNames = getPostFileNames()

  return listPostFileNames.map((fileName) => getPostByKey(fileName, fields))
}
