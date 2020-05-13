import React, { ReactElement } from 'react';

// Utilities
import { kebabCase } from 'lodash';

// Components
import { Link, graphql } from 'gatsby';
import { DefaultLayout } from '../components/DefaultLayout';
import { TagsHeaderColumns } from '../components/HeaderColumns';

interface TagsPageProps {
  data: {
    allMarkdownRemark: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
  };
}

export default function TagsPage({
  data: {
    allMarkdownRemark: { group },
  },
}: TagsPageProps): ReactElement<TagsPageProps> {
  return (
    <DefaultLayout title="Tags">
      <TagsHeaderColumns title="Tags" />

      <hr />

      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
