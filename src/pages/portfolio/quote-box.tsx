import React from 'react';
import type { ReactElement } from 'react';

import { graphql } from 'gatsby';

import type { PortfolioLinkPageProps } from '../portfolio';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

import { QuoteBox } from 'quote-box';

export default function QuoteBoxPage({ data }: PortfolioLinkPageProps): ReactElement<PortfolioLinkPageProps> {
  return <PortfolioPageLayout element={<QuoteBox />} {...data.github.viewer.repository} />;
}

export const query = graphql`
  query QuoteBoxQuery {
    github {
      viewer {
        repository(name: "quote-box") {
          name
          description
        }
      }
    }
  }
`;
