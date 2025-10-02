import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { Route } from './+types/root';
import { ConfirmDialogProvider } from './components/ui/confirm-dialog';
import { TooltipProvider } from './components/ui/tooltip';
import siteMetadata from './data/site-metadata';
import { ErrorPage } from './error-page';

import './app.css';
import 'simplebar-react/dist/simplebar.min.css';
import './simplebar-custom.css';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap',
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: siteMetadata.title },
    { name: 'description', content: siteMetadata.description },
  ] satisfies Route.MetaDescriptors;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-900 text-white">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <noscript>
          <style>
            {`[data-simplebar] {
              overflow: auto;
            }`}
          </style>
        </noscript>
        <Meta />
        <Links />
      </head>
      <body>
        <ConfirmDialogProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ConfirmDialogProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return <ErrorPage message={message} details={details} stack={stack} />;
}
