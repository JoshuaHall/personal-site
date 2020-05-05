import { useStaticQuery, graphql } from 'gatsby';

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  author: string;
}

export function useSiteMetadata(): SiteMetadata {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            url
            author
          }
        }
      }
    `,
  );

  return site.siteMetadata as SiteMetadata;
}
