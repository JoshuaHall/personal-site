import React from 'react';
import type { ReactElement } from 'react';

import { Link } from 'gatsby';

interface PostLinkProps {
  path: string;
  title: string;
  date: string;
}

export function PostLink({ path, title, date }: PostLinkProps): ReactElement<PostLinkProps> {
  return (
    <div>
      <Link to={path}>
        {title} ({date})
      </Link>
    </div>
  );
}
