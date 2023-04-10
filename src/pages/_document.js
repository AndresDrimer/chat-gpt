import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head> <title>Let´s talk</title>
      <link rel="shortcut icon" href="/crystal-ball-icon.ico" /></Head>
      <body className='bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
