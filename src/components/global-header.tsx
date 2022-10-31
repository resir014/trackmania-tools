import Link from 'next/link';
import * as React from 'react';
import { TMToolsLogo } from './logo';

export interface GlobalHeaderProps {
  subBrand?: string;
}

export function GlobalHeader({ subBrand }: GlobalHeaderProps) {
  return (
    <header className="flex items-center h-[36px] px-6 bg-black">
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-1 group text-sm leading-4">
          <TMToolsLogo height={16} aria-hidden />
          <p className="hidden md:block font-semibold group-hover:underline">
            resir014&apos;s Trackmania Tools
          </p>
        </Link>
        {subBrand ? (
          <>
            <span className="text-gray-300 text-sm leading-4" aria-hidden>
              /
            </span>
            <p className="text-gray-300 text-sm leading-4">{subBrand}</p>
          </>
        ) : null}
      </div>
    </header>
  );
}
