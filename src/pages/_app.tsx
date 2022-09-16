import * as React from 'react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import siteMetadata from '~/modules/data/site-metadata';
import { defaultOpenGraph, defaultTwitterCard } from '~/utils/seo';

import '~/styles/fonts';
import '~/styles/globals.css';

export default function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <DefaultSeo
        titleTemplate={`%s · ${siteMetadata.title}`}
        description={siteMetadata.description}
        canonical={`${siteMetadata.siteUrl}${router.asPath || ''}`}
        openGraph={defaultOpenGraph}
        twitter={defaultTwitterCard}
      />

      <Component {...pageProps} />
    </>
  );
}
