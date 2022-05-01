import type { ComponentType } from 'react'

import styled from 'styled-components'

import type { FCWithChildren } from 'types'

interface SectionComponent {
  Title: ComponentType<any>
  SubTitle: ComponentType<any>
}

const Section: FCWithChildren & SectionComponent = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>
}

export default Section

const Title = styled.span`
  display: block;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 24px;
  color: #3c3c3c;
`

const SubTitle = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #3c3c3c;
`

const SectionContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin: 36px 0;
  color: #4a4a4a;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

Section.Title = Title
Section.SubTitle = SubTitle
