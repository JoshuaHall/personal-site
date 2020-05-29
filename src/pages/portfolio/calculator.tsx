import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import { PortfolioLinkPageProps } from '../portfolio';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

import { Calculator } from 'calculator';

import '../../../node_modules/calculator/src/index.scss';

export default function CalculatorPage({ data }: PortfolioLinkPageProps): ReactElement<PortfolioLinkPageProps> {
  return <PortfolioPageLayout element={<Calculator initialInput={0} />} {...data.github.viewer.repository} />;
}

export const query = graphql`
  query CalculatorQuery {
    github {
      viewer {
        repository(name: "calculator") {
          name
          description
        }
      }
    }
  }
`;
