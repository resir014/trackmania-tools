import * as React from 'react';

export function HomeFooter() {
  return (
    <footer className="px-6 pb-8 pt-4 text-center text-gray-300 text-sm">
      <p>
        &copy; 2022 resir014.{' '}
        <a
          className="text-green-300 hover:underline"
          href="https://github.com/resir014/trackmania-tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>{' '}
        available under the MIT licence.
      </p>
      <p>This project is not affiliated with Trackmania or Ubisoft Nadeo.</p>
    </footer>
  );
}
