import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';

import { DefaultLayout } from '../components/DefaultLayout';
import { PostLink } from '../components/PostLink';
import { HeaderColumns } from '../components/HeaderColumns';

import { range } from 'lodash';

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

  const previousButton = (
    <Link to={prevPage} rel="prev" className="pagination-previous">
      ← Previous Page
    </Link>
  );

  const disabledPreviousButton = (
    <button className="pagination-previous" disabled>
      ← Previous Page
    </button>
  );

  const nextButton = (
    <Link to={nextPage} rel="next" className="pagination-next">
      Next Page →
    </Link>
  );

  const disabledNextButton = (
    <button className="pagination-next" disabled>
      Next Page →
    </button>
  );

  const pagination = (
    <>
      <hr />

      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        {isFirst ? disabledPreviousButton : previousButton}

        {isLast ? disabledNextButton : nextButton}

        <ul className="pagination-list">
          {range(1, numPages + 1).map((pageNum) => {
            const blogLinkEnd = pageNum !== 1 ? `/${pageNum}` : '';

            return (
              <li key={`pagination-number${pageNum}`}>
                <Link
                  to={`/blog${blogLinkEnd}`}
                  className={`pagination-link${pageNum === currentPage ? ' is-current' : ''}`}
                >
                  {pageNum}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );

  const shouldShowPagination = numPages >= 2;

  return (
    <DefaultLayout title="Blog">
      <HeaderColumns title="Blog" subtitle="Long form thoughts on anything I feel like writing about.">
        <p className="content">
          Looking for a specific topic? Look at the <Link to="/tags">list of tags</Link>
        </p>
      </HeaderColumns>

      <hr />

      {postLinks}

      {shouldShowPagination && pagination}
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
