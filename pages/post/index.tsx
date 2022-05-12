import PageLayout from 'layouts/PageLayout'

import type { NextPageWithLayout } from 'types'

const PostPage: NextPageWithLayout = () => {
  return <>Post page</>
}

PostPage.withLayout = (page) => {
  return <PageLayout>{page}</PageLayout>
}

export default PostPage
