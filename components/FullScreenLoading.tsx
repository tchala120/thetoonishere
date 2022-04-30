import styled from 'styled-components'

import LoadingIcon from 'components/LoadingIcon'

import type { FCWithChildren } from 'types'

const FullScreenLoading: FCWithChildren = ({ children }) => {
  return (
    <FullScreenLoadingContainer>
      <LoadingIcon style={{ fontSize: 80 }} />

      <Tip>{children}</Tip>
    </FullScreenLoadingContainer>
  )
}

export default FullScreenLoading

const FullScreenLoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-item: center;
  text-align: center;
`

const Tip = styled.h1`
  font-weight: 900;
  margin-bottom: 0;
`
