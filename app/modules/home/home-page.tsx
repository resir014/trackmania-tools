import { HomeFooter } from './home-footer';
import { ProjectCard } from './project-card';
import { Page } from '~/components/page';
import { PageContent } from '~/components/page-content';
import projects from '~/data/projects';

export function HomePage() {
  return (
    <Page>
      <PageContent className="sm:py-12 md:py-18 lg:py-24">
        <div className="mx-auto grid w-full grid-cols-1 gap-4 md:max-w-xl md:grid-cols-2">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </PageContent>
      <HomeFooter />
    </Page>
  );
}
