import * as React from 'react';
import type { ErrorProps } from 'next/error';
import { NextSeo } from 'next-seo';
import { DefaultLayout } from '~/components/default-layout';
import { Page } from '~/components/page';
import { HomeFooter } from '~/modules/home/home-footer';
import { PageContent } from '~/components/page-content';
import Link from 'next/link';

const statusCodes: { [code: number]: string } = {
  400: 'Bad Request',
  404: 'This page could not be found.',
  405: 'Method Not Allowed',
  500: 'Internal Server Error',
  0: 'An unknown error has occured.',
};

export default function CustomErrorPage({ statusCode, title }: ErrorProps) {
  const errorMessage = React.useMemo(
    () => title ?? statusCodes[statusCode || 0],
    [statusCode, title]
  );

  return (
    <>
      <NextSeo title={`${statusCode || 0}: ${errorMessage}`} noindex />
      <DefaultLayout>
        <Page>
          <PageContent className="sm:py-12 md:py-18 lg:py-24">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl md:text-4xl font-semibold">{`${errorMessage}`}</h1>
              <p>Click the winke below to go back home.</p>
              <p>
                <Link href="/">
                  <a className="inline-block">
                    <img src="/static/winke.gif" alt="winke" />
                    <span className="sr-only">(Go back home)</span>
                  </a>
                </Link>
              </p>
            </div>
          </PageContent>
        </Page>
        <HomeFooter />
      </DefaultLayout>
    </>
  );
}
