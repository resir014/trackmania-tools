import * as React from 'react';
import { Page } from '~/components/page';
import { PageContent } from '~/components/page-content';
import projects from '../data/projects';
import { HomeFooter } from './home-footer';
import { ProjectCard } from './project-card';

export function HomePage() {
  return (
    <Page>
      <PageContent className="sm:py-12 md:py-18 lg:py-24">
        <div className="w-full md:max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </PageContent>
      <HomeFooter />
    </Page>
  );
}
