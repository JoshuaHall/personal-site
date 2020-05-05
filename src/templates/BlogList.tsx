import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';

import { DefaultLayout } from '../components/DefaultLayout';
import { PostLink } from '../components/PostLink';

interface BlogListProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            path: string;
            date: string;
          };
        };
      }[];
    };
  };
  pageContext: {
    currentPage: number;
    numPages: number;
  };
}

function numberToBlogPagePath(num: number): string {
  return `/blog/${num}`;
}

export default function BlogList({ data, pageContext }: BlogListProps): ReactElement<BlogListProps> {
  const posts = data.allMarkdownRemark.edges;

  const postLinks = posts.map((edge, i) => {
    return <PostLink key={i} {...edge.node.frontmatter} />;
  });

  const { currentPage, numPages } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage: string = currentPage - 1 === 1 ? '/blog' : numberToBlogPagePath(currentPage - 1);
  const nextPage = numberToBlogPagePath(currentPage + 1);

  return (
    <DefaultLayout>
      <h1 className="title">Blog</h1>
      <div className="level">
        <div className="level-left">
          <h2 className="subtitle">Long form thoughts on anything I feel like writing about.</h2>
        </div>
        <div className="level-right">
          <p className="content">
            Looking for a specific topic? Look at the <Link to="/tags">list of tags</Link>.
          </p>
        </div>
      </div>

      <hr />
      {postLinks}
      {numPages >= 2 && <hr />}
      {!isFirst && (
        <Link to={prevPage} rel="prev" className="button is-primary">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next" className="button is-primary">
          Next Page →
        </Link>
      )}
    </DefaultLayout>
  );
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
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
