import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { ConfigProvider } from 'antd'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider componentSize="large">
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
