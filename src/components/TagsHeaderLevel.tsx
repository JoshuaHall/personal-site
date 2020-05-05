import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

interface TagsHeaderLevelProps {
  title: string;
}

export function TagsHeaderLevel({ title }: TagsHeaderLevelProps): ReactElement {
  return (
    <div className="level">
      <div className="level-left">
        <h1 className="title">{title}</h1>
      </div>
      <div className="level-right">
        <Link to="/blog">Back to the blog list</Link>
      </div>
    </div>
  );
}
