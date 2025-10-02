import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import * as React from 'react';
import { Link } from 'react-router';
import { type ProjectDetail } from '../../data/projects';
import { TMToolsLogo } from '~/components/logo';

export interface ProjectCardProps {
  project: ProjectDetail;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectLink = () => {
    if (project.url) {
      if (project.isExternal) {
        return (
          <a
            className="helper-link-cover inline-flex items-center space-x-1"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
            <span className="ml-1 inline-flex items-center justify-center text-gray-300">
              <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden width={15} height={15} />
              <span className="sr-only">(external)</span>
            </span>
          </a>
        );
      }

      return (
        <Link to={project.url} className="helper-link-cover">
          {project.title}
        </Link>
      );
    }

    return <span>{project.title}</span>;
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-950 shadow">
      <div className="flex min-h-[240px] items-center justify-center px-4">
        {project.logo ? (
          <img src={project.logo} alt="Project logo" className={clsx('h-[64px]', project.url ? null : 'opacity-25')} />
        ) : (
          <TMToolsLogo className={clsx('h-[64px]', project.url ? null : 'opacity-25')} />
        )}
      </div>
      <div className="border-t border-gray-800 p-4">
        <h2 className={clsx('font-semibold', project.url ? null : 'opacity-25')}>{projectLink()}</h2>
      </div>
    </div>
  );
}
