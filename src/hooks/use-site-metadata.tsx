import { useStaticQuery, graphql } from "gatsby";

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
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
            siteUrl
            author
          }
        }
      }
    `,
  );

  return site.siteMetadata;
}
