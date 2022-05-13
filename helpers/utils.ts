import { convert } from 'html-to-text'
import readingTime from 'reading-time'

export const isDev = process.env.NODE_ENV === 'development'

export const getBlogReadingTime = (content: string) => {
  const text = convert(content)

  return readingTime(text)
}
