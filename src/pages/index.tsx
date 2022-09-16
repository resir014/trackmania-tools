import * as React from 'react';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import siteMetadata from '~/modules/data/site-metadata';
import { HomePage } from '~/modules/home/home-page';
import { DefaultLayout } from '~/components/default-layout';

const IndexPage: NextPage = () => {
  return (
    <>
      <NextSeo title={siteMetadata.title} titleTemplate="%s" openGraph={{ title: 'Home' }} />
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </>
  );
};

export default IndexPage;
