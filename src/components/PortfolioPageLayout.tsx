import React, { ReactElement } from 'react';

import { DefaultLayout } from './DefaultLayout';

export interface PortfolioPageLayoutProps {
  name: string;
  description: string;
  element: JSX.Element;
}

export function PortfolioPageLayout({
  name,
  description,
  element,
}: PortfolioPageLayoutProps): ReactElement<PortfolioPageLayoutProps> {
  return (
    <DefaultLayout>
      <h1 className="title">{name}</h1>
      <h2 className="subtitle">{description}</h2>

      <hr />

      {element}
    </DefaultLayout>
  );
}
