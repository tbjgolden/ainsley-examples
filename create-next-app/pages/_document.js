import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body style={{ visibility: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _Document
