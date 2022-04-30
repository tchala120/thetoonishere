import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <div key="style">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </div>,
        ],
        head: [
          <link
            key="fonts"
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />,
          <link
            key="preconnect"
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />,
          <link
            key="inter-font"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
            rel="stylesheet"
          />,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}
