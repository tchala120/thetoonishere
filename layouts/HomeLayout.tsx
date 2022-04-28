import styled from 'styled-components'

import type { FCWithChildren } from 'types'

const HomeLayout: FCWithChildren = ({ children }) => {
  return <HomeContainer>{children}</HomeContainer>
}

export default HomeLayout

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
