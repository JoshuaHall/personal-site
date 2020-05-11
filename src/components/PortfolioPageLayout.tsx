import React, { ReactElement } from 'react';

import { DefaultLayout } from './DefaultLayout';
import { Link } from 'gatsby';

export interface PortfolioPageLayoutProps {
  name: string;
  description: string;
  element: ReactElement;
}

export function PortfolioPageLayout({
  name,
  description,
  element,
}: PortfolioPageLayoutProps): ReactElement<PortfolioPageLayoutProps> {
  return (
    <DefaultLayout title={name} description={description}>
      <div className="level">
        <div className="level-left">
          <div>
            <h1 className="title">{name}</h1>
            <h2 className="subtitle">{description}</h2>
          </div>
        </div>
        <div className="level-right">
          <Link to="/portfolio">&lt; Back to my portfolio</Link>
        </div>
      </div>

      <hr />

      <div className="bulma-fonts">{element}</div>
    </DefaultLayout>
  );
}
