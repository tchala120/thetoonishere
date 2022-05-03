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
      <NotFoundTitle>{title}</NotFoundTitle>

      {children}
    </NotFoundContentContainer>
  )
}

export default NotFoundContent

const NotFoundContentContainer = styled.div`
  margin: 36px 0;
  display: grid;
  place-items: center;
`

const NotFoundTitle = styled.span`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 24px;
`
