import React, { ReactElement } from "react";
import { graphql, Link } from "gatsby";
import { DefaultLayout } from "../components/DefaultLayout";

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        title: string;
        tags: string[];
      };
      html: string;
    };
  };
}

export default function BlogPost({ data }: BlogTemplateProps): ReactElement<BlogTemplateProps> {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <DefaultLayout>
      <article>
        <h1 className="title is-2">{frontmatter.title}</h1>
        <h2 className="subtitle">{frontmatter.date}</h2>
        <div className="tags">
          {frontmatter.tags.map((tag) => (
            <Link className="tag" key={tag} to={`/tags/${tag}`}>
              {tag}
            </Link>
          ))}
        </div>
        <hr />
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
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
        tags
      }
    }
  }
`;
