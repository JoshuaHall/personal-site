import React, { ReactElement } from 'react';

// Components
import { Link, graphql } from 'gatsby';
import { DefaultLayout } from '../components/DefaultLayout';
import { PostLink } from '../components/PostLink';
import { TagsHeaderLevel } from '../components/TagsHeaderLevel';

interface TagsProps {
  pageContext: {
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: {
          frontmatter: {
            path: string;
            title: string;
            date: string;
          };
        };
      }[];
    };
  };
}

export default function Tags({ pageContext, data }: TagsProps): ReactElement<TagsProps> {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

  return (
    <DefaultLayout title={`${tag} tag`}>
      <TagsHeaderLevel title={tagHeader} />

      <hr />

      <ul className="content">
        {edges.map(({ node }, i) => (
          <li key={i}>
            <PostLink {...node.frontmatter} />
          </li>
        ))}
      </ul>

      <hr />

      <Link to="/tags">All tags</Link>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;
