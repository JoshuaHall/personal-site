import React, { ReactElement } from "react";
import { graphql } from "gatsby";
import { DefaultLayout } from "../components/DefaultLayout";

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

export default function BlogTemplate({ data }: BlogTemplateProps): ReactElement<BlogTemplateProps> {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <DefaultLayout>
      <article className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
