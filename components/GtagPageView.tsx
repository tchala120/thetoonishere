import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { pageview } from 'helpers/gtag'

import type { FCWithChildren } from 'types'

const GtagPageView: FCWithChildren = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <>{children}</>
}

export default GtagPageView
