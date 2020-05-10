import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

import { QuoteBox } from 'quote-box';

interface QuoteBoxPageProps {
  data: {
    github: {
      viewer: {
        repository: {
          name: string;
          description: string;
        };
      };
    };
  };
}

export default function QuoteBoxPage({ data }: QuoteBoxPageProps): ReactElement<QuoteBoxPageProps> {
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
