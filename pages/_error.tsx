import type { NextPage } from 'next'

import Link from 'next/link'
import styled from '@emotion/styled'

import ErrorLayout from 'layouts/ErrorLayout'

import errorDescription from 'constants/error'

interface ErrorPageProps {
  statusCode?: number
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode = 404 }) => {
  const description = errorDescription[statusCode]

  return (
    <ErrorLayout>
      <ErrorContentContainer>
        <ErrorTitle>{statusCode}</ErrorTitle>
        <ErrorDescription>{description}</ErrorDescription>

        {statusCode === 404 && (
          <Link href="/">
            <a style={{ fontSize: 18, textDecoration: 'underline' }}>
              Back to home
            </a>
          </Link>
        )}
      </ErrorContentContainer>
    </ErrorLayout>
  )
}

export default ErrorPage

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

const ErrorContentContainer = styled.div`
  margin: 36px 0;
  display: grid;
  place-items: center;
`

const ErrorTitle = styled.span`
  font-size: 100px;
  font-weight: 900;
`

const ErrorDescription = styled.span`
  font-size: 18px;
  margin-bottom: 24px;
`
