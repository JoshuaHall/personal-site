import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

import { Calculator } from 'calculator';

import '../../../node_modules/calculator/src/index.scss';

interface CalculatorPageProps {
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

export default function CalculatorPage({ data }: CalculatorPageProps): ReactElement<CalculatorPageProps> {
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
