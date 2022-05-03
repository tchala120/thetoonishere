import type { NextPage } from 'next'

import Link from 'next/link'

import NotFoundContent from 'components/NotFoundContent'

import NotFoundLayout from 'layouts/NotFoundLayout'

const NotFoundPage: NextPage = () => {
  return (
    <NotFoundLayout>
      <NotFoundContent title="Page not be found">
        <Link href="/">
          <a>Back to main page</a>
        </Link>
      </NotFoundContent>
    </NotFoundLayout>
  )
}

export default NotFoundPage
