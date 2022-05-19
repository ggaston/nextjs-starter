import '../styles/globals.css'
import type { FC } from 'react'
import type { NextComponentType } from 'next'
import type { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import DefaultLayout from '../lib/layouts/default'

type ComponentProp = NextComponentType & {
  getLayout?: () => FC<Record<string, unknown>> 
}

type AppProps = NextAppProps & { Component: ComponentProp }

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      {getLayout( <Component {...pageProps} />)}
    </>
  )
}

export default MyApp