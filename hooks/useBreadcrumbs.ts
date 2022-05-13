import type { Route } from 'antd/lib/breadcrumb/Breadcrumb'

import { useRouter } from 'next/router'
import { sentenceCase } from 'change-case'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

import { toEllipsisText } from 'helpers/formatter'

const useBreadcrumbs = () => {
  const { lg } = useBreakpoint()
  const { pathname, query } = useRouter()

  const slug = (query.slug as string) || ''

  const pathSnippets = pathname.split('/').filter((i) => i)

  const extraBreadcrumbItems: Route[] = pathSnippets.map((path, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`

    return {
      breadcrumbName: getBreadcrumbName(path),
      path: url,
    }
  })

  const homeBreadcrumb: Route = {
    breadcrumbName: 'Home',
    path: '/',
  }

  return [homeBreadcrumb, ...extraBreadcrumbItems]

  function getBreadcrumbName(path: string) {
    const toSentence = sentenceCase(path.replace('[slug]', slug))

    if (lg) {
      return toSentence
    }

    return toEllipsisText(toSentence)
  }
}

export default useBreadcrumbs
