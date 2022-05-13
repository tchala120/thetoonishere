export const DATE_FORMAT = 'DD MMM, YYYY'
export const TIME_FORMAT = 'HH:mm'
export const DATE_TIME_FORMAT = `${DATE_FORMAT} - ${TIME_FORMAT} A`

export function toEllipsisText(text = '', sliceLength = 20) {
  if (text.length < sliceLength) {
    return text
  }

  return text.slice(0, sliceLength).concat('...')
}
