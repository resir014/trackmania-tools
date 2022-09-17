import Link from 'next/link';
import * as React from 'react';
import { Page } from '~/components/page';
import { PageContent } from '~/components/page-content';

export function CompetitionBracketBuilder() {
  return (
    <Page subBrand="Competition bracket">
      <PageContent className="sm:py-12 md:py-18 lg:py-24">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Coming soon&trade;.</h1>
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
  );
}
