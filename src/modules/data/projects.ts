import projects from '~/_data/projects.json';

export type ProjectDetail = {
  /** Unique identifier of project (for React keys.) */
  readonly name: string;
  /** Project name. */
  readonly title: string;
  /** Project description. */
  readonly description?: string;
  /** URL to the project. Can be internal or external link. */
  readonly url?: string;
  /** Project logo. */
  readonly logo?: string;
  /** Project exists on an external website. */
  readonly isExternal?: boolean;
};

export default projects as unknown as ProjectDetail[];
