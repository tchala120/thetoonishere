import type { AppProps } from 'next/app'

import '../styles/globals.css'

import Script from 'next/script'
import { ConfigProvider } from 'antd'

import GtagPageView from 'components/GtagPageView'

import { trackingID } from 'helpers/gtag'
import { DefaultSeo } from 'next-seo'

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
        title="👋 Hi! | thetoonishere"
        description="My name is Toon, and here is my portfolio, which showcases everything I've done in my spare time. My ambition is to work as a website developer since I enjoy coding."
        openGraph={{
          type: 'website',
          locale: 'en_TH',
          url: 'https://panupong.io',
          title: '👋 Hi! | thetoonishere',
          description:
            "My name is Toon, and here is my portfolio, which showcases everything I've done in my spare time. My ambition is to work as a website developer since I enjoy coding.",
          site_name: 'Panupong Tipjoi',
          images: [
            {
              url: 'https://panupong.io/favicon.webp',
              alt: "Toon's personal website",
              width: 1024,
              height: 1024,
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
