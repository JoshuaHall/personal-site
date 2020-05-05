import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import { ChildrenProps } from '../childrenProps';

interface TagsHeaderLevelProps {
  title: string;
}

interface HeaderLevelProps extends ChildrenProps, TagsHeaderLevelProps {
  subtitle?: string;
}

export function HeaderLevel({ title, children, subtitle }: HeaderLevelProps): ReactElement<HeaderLevelProps> {
  return (
    <div className="level level-align-start">
      <div className="level-left">
        <div>
          <h1 className="title">{title}</h1>
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        </div>
      </div>
      <div className="level-right">{children}</div>
    </div>
  );
}

export function TagsHeaderLevel({ title }: TagsHeaderLevelProps): ReactElement<TagsHeaderLevelProps> {
  return (
    <HeaderLevel title={title}>
      <Link to="/blog">Back to the blog list</Link>
    </HeaderLevel>
  );
}
