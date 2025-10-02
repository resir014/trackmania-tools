import { Link } from 'react-router';
import { DefaultLayout } from './components/default-layout';
import { Page } from './components/page';
import { PageContent } from './components/page-content';
import { HomeFooter } from './modules/home/home-footer';

export interface ErrorPageProps {
  message: string;
  details: string;
  stack?: string;
}

export function ErrorPage({ message, details, stack }: ErrorPageProps) {
  return (
    <DefaultLayout>
      <Page>
        <PageContent className="space-y-6 sm:py-12 md:py-18 lg:py-24">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-semibold md:text-4xl">{message}</h1>
            <p className="text-lg md:text-xl">{details}</p>
          </div>
          {stack && (
            <pre className="w-full overflow-x-auto p-4">
              <code>{stack}</code>
            </pre>
          )}
          <div className="space-y-4 text-center">
            <p>Click the winke below to go back home.</p>
            <p>
              <Link to="/" className="inline-block">
                <img src="/static/winke.gif" alt="winke" />
                <span className="sr-only">(Go back home)</span>
              </Link>
            </p>
          </div>
        </PageContent>
      </Page>
      <HomeFooter />
    </DefaultLayout>
  );
}
