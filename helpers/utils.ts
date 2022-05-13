import { convert } from 'html-to-text'
import readingTime from 'reading-time'

export const getBlogReadingTime = (content: string) => {
  const text = convert(content)

  return readingTime(text)
}
