import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { TMToolsLogo } from '~/components/logo';
import { ProjectDetail } from '../data/projects';

export interface ProjectCardProps {
  project: ProjectDetail;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectLink = () => {
    if (project.url) {
      if (project.isExternal) {
        return (
          <a
            className="inline-flex items-center space-x-1 helper-link-cover"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
            <span className="inline-flex items-center justify-center text-gray-300 ml-1">
              <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden width={15} height={15} />
              <span className="sr-only">(external)</span>
            </span>
          </a>
        );
      }

      return (
        <Link href={project.url} as={project.url} className="helper-link-cover">
          {project.title}
        </Link>
      );
    }

    return <span>{project.title}</span>;
  };

  return (
    <div className="relative overflow-hidden bg-black rounded-tl-2xl rounded-br-2xl shadow">
      <div className="flex items-center justify-center min-h-[240px] px-4">
        {project.logo ? (
          <img
            src={project.logo}
            alt="Project logo"
            className={clsx('h-[64px]', project.url ? null : 'opacity-25')}
          />
        ) : (
          <TMToolsLogo className={clsx('h-[64px]', project.url ? null : 'opacity-25')} />
        )}
      </div>
      <div className="p-4 border-t border-gray-800">
        <h2 className={clsx('font-semibold', project.url ? null : 'opacity-25')}>
          {projectLink()}
        </h2>
      </div>
    </div>
  );
}
