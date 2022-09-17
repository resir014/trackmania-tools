import * as React from 'react';
import { Page } from '~/components/page';
import { PageContent } from '~/components/page-content';
import { PageHeader } from './page-header';

export function CompetitionBracketBuilder() {
  return (
    <Page subBrand="Competition bracket">
      <PageContent className="sm:py-12">
        <div className="container mx-auto">
          <PageHeader pageTitle="Build" />
        </div>
      </PageContent>
    </Page>
  );
}
