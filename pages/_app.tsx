import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { ConfigProvider } from 'antd'

import FullScreenLoading from 'components/FullScreenLoading'

import { trackingID } from 'helpers/gtag'

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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingID}');
        `}
      </Script>

      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
