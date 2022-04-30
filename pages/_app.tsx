import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { useEffect, useState } from 'react'
import { ConfigProvider } from 'antd'

import FullScreenLoading from 'components/FullScreenLoading'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <FullScreenLoading>Loading...</FullScreenLoading>
  }

  return (
    <ConfigProvider componentSize="large">
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
