import type { AppProps } from 'next/app'

import '../styles/globals.css'

import Script from 'next/script'
import { ConfigProvider } from 'antd'

import GtagPageView from 'components/GtagPageView'

import { trackingID } from 'helpers/gtag'
import { DefaultSeo } from 'next-seo'
import { meta } from 'constants/meta'

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

      <DefaultSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          type: 'website',
          locale: 'en_TH',
          url: 'https://panupong.io',
          title: meta.title,
          description: meta.description,
          site_name: 'Panupong Tipjoi',
          images: [
            {
              url: 'https://panupong.io/og-image.webp',
              alt: meta.description,
              width: 800,
              height: 600,
            },
          ],
        }}
        twitter={{
          handle: '@thetoonishere',
          site: '@thetoonishere',
          cardType: 'summary_large_image',
        }}
      />

      <GtagPageView>
        <Component {...pageProps} />
      </GtagPageView>
    </ConfigProvider>
  )
}

export default MyApp
