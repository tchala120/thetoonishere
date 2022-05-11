import styled from '@emotion/styled'

import type { FCWithChildren } from 'types'

const ErrorLayout: FCWithChildren = ({ children }) => {
  return <ErrorLayoutContainer>{children}</ErrorLayoutContainer>
}

export default ErrorLayout

const ErrorLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
