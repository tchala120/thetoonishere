import styled from 'styled-components'

import Container from 'components/Container'

import type { FCWithChildren } from 'types'

const Content: FCWithChildren = ({ children }) => {
  return (
    <ContentContainer>
      <Container>{children}</Container>
    </ContentContainer>
  )
}

export default Content

const ContentContainer = styled.div`
  min-height: calc(100vh - 210px);
`
