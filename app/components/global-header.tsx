import { Link } from 'react-router';
import { TMToolsLogo } from './logo';

export interface GlobalHeaderProps {
  subBrand?: string;
}

export function GlobalHeader({ subBrand }: GlobalHeaderProps) {
  return (
    <header className="flex h-[36px] items-center bg-gray-950 px-6">
      <div className="flex items-center space-x-3">
        <Link to="/" className="group flex items-center space-x-1 text-sm leading-4">
          <TMToolsLogo height={16} aria-hidden />
          <p className="hidden font-semibold group-hover:underline md:block">resir014&apos;s Trackmania Tools</p>
        </Link>
        {subBrand ? (
          <>
            <span className="text-sm leading-4 text-gray-300" aria-hidden>
              /
            </span>
            <p className="text-sm leading-4 text-gray-300">{subBrand}</p>
          </>
        ) : null}
      </div>
    </header>
  );
}
