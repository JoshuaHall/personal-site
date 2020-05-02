import React, { ReactElement } from "react";
import { graphql } from "gatsby";

import { PostLink } from "../components/PostLink";

import { DefaultLayout } from "../components/DefaultLayout";

interface Nodes {
  node: {
    id: string | number | undefined;
    excerpt: string;
    frontmatter: {
      date: string;
      path: string;
      title: string;
    };
  };
}

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: Nodes[];
    };
  };
}

export default function Blog({ data }: BlogProps): ReactElement<BlogProps> {
  const Posts = data.allMarkdownRemark.edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} frontmatter={edge.node.frontmatter} />);

  return (
    <DefaultLayout>
      <div className="container mx-auto">{Posts}</div>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
