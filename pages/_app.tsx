import '../styles/globals.css'

import Script from 'next/script'
import { ConfigProvider } from 'antd'

import { trackingID } from 'helpers/gtag'

import type { AppPropsWithLayout } from 'types'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const withLayout = Component.withLayout ?? ((page) => page)

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

      {withLayout(<Component {...pageProps} />)}
    </ConfigProvider>
  )
}

export default MyApp
