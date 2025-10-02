import siteMetadata from './site-metadata.json';

export interface SiteAuthor {
  name: string;
  description: string;
  website: string;
  url: { [key: string]: string };
  email: string;
  twitter: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  author: SiteAuthor;
}

export default siteMetadata as unknown as SiteMetadata;
