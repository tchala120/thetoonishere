import readingTime from 'reading-time'

export const getBlogReadingTime = (content: string) => {
  const text = content.replace(/<[^>]+>/g, '')

  return readingTime(text)
}
