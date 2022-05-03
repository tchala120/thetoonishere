import styled from 'styled-components'

import type { FCWithChildren } from 'types'

const NotFoundLayout: FCWithChildren = ({ children }) => {
  return <NotFoundLayoutContainer>{children}</NotFoundLayoutContainer>
}

export default NotFoundLayout

const NotFoundLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
