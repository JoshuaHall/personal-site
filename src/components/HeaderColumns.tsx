import React from 'react';
import type { ReactElement } from 'react';

import { Link } from 'gatsby';
import type { ChildrenProps } from '../childrenProps';

interface TagsHeaderColumnProps {
  title: string;
}

interface HeaderColumnProps extends ChildrenProps, TagsHeaderColumnProps {
  subtitle?: string;
}

export function HeaderColumns({ title, subtitle, children }: HeaderColumnProps): ReactElement<HeaderColumnProps> {
  return (
    <div className="columns">
      <div className="column">
        <div>
          <h1 className="title">{title}</h1>
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        </div>
      </div>
      <div className="column is-narrow">{children}</div>
    </div>
  );
}

export function TagsHeaderColumns({ title }: TagsHeaderColumnProps): ReactElement<TagsHeaderColumnProps> {
  return (
    <HeaderColumns title={title}>
      <Link to="/blog">Back to the blog list</Link>
    </HeaderColumns>
  );
}
