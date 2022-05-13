import type { NextPage } from 'next'

import dynamic from 'next/dynamic'

const Error = dynamic(() => import('components/Error'))

interface ErrorPageProps {
  statusCode?: number
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode = 404 }) => {
  return <Error statusCode={statusCode} />
}

export default ErrorPage

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
