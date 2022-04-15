import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ApolloProvider } from "@apollo/client"
import client from "../utils/client"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen w-full font-noto-sans">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  )
}

export default MyApp
