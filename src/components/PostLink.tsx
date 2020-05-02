import React, { ReactElement } from "react";
import { Link } from "gatsby";

interface PostLinkProps {
  frontmatter: {
    path: string;
    title: string;
    date: string;
  };
}

export function PostLink({ frontmatter }: PostLinkProps): ReactElement<PostLinkProps> {
  return (
    <div>
      <Link to={frontmatter.path}>
        {frontmatter.title} ({frontmatter.date})
      </Link>
    </div>
  );
}
