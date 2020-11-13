import React from 'react';
import type { ReactElement } from 'react';

import { DefaultLayout } from './DefaultLayout';
import { Link } from 'gatsby';
import { HeaderColumns } from './HeaderColumns';

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
      <HeaderColumns title={name} subtitle={description}>
        <Link to="/portfolio">&lt; Back to my portfolio</Link>
      </HeaderColumns>

      <hr />

      <div className="container bulma-fonts">{element}</div>
    </DefaultLayout>
  );
}
