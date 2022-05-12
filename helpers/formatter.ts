export function toEllipsisText(text = '', sliceLength = 20) {
  if (text.length < sliceLength) {
    return text
  }

  return text.slice(0, sliceLength).concat('...')
}
