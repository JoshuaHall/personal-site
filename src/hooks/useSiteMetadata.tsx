import { useStaticQuery, graphql } from 'gatsby';

export interface MetaItem {
  name: string;
  content: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  author: string;
  keywords: string[];
  image: string;
  myEmail: string;
  myPhone: string;
  myFormattedPhone: string;
  myLinkedIn: string;
  myGitHub: string;
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
            keywords
            image
            myEmail
            myPhone
            myFormattedPhone
            myLinkedIn
            myGitHub
          }
        }
      }
    `,
  );

  return site.siteMetadata as SiteMetadata;
}
