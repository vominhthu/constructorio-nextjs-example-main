import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>Constructor Next.js Example</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="google-site-verification" content="Qw9E4neXTQd51bXSJ5ImjVnYAIPtdMTw48VdGfry9xE" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
