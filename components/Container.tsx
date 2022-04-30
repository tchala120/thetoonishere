import styled from 'styled-components'

const Container = styled.div`
  display: block;
  margin: 0 auto;
  padding: 50px;
  max-width: 768px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`

export default Container
