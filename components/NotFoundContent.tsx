import styled from 'styled-components'
import type { FCWithChildren } from 'types'

interface NotFoundContentProps {
  title: string
}

const NotFoundContent: FCWithChildren<NotFoundContentProps> = ({
  title,
  children,
}) => {
  return (
    <NotFoundContentContainer>
      <p>{title}</p>

      {children}
    </NotFoundContentContainer>
  )
}

export default NotFoundContent

const NotFoundContentContainer = styled.div`
  margin: 36px 0;
`
