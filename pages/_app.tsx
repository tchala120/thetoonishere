import type { AppProps } from 'next/app'

import '../styles/globals.css'

import Script from 'next/script'
import { ConfigProvider } from 'antd'

import GtagPageView from 'components/GtagPageView'

import { trackingID } from 'helpers/gtag'

function MyApp({ Component, pageProps }: AppProps) {
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

      <GtagPageView>
        <Component {...pageProps} />
      </GtagPageView>
    </ConfigProvider>
  )
}

export default MyApp
