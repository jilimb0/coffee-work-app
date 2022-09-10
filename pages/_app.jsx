import Head from "next/head"
import Layout from "../components/Layout"
import "../styles/globals.scss"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Customer Order App</title>
        <meta name="description" content="App for ordering on your phone" />
        <link rel="icon" href="/icon.webp" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default MyApp
