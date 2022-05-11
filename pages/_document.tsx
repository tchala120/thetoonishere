import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from '@emotion/styled'

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
      }
    } finally {
      sheet.seal()
    }
  }
}
