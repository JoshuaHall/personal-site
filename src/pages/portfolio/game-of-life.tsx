import React from 'react';
import type { ReactElement } from 'react';

import { graphql } from 'gatsby';

import type { PortfolioLinkPageProps } from '../portfolio';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

import { GameOfLife } from 'game-of-life';

export default function GameOfLifePage({ data }: PortfolioLinkPageProps): ReactElement<PortfolioLinkPageProps> {
  return <PortfolioPageLayout element={<GameOfLife />} {...data.github.viewer.repository} />;
}

export const query = graphql`
  query GameOfLifeQuery {
    github {
      viewer {
        repository(name: "game-of-life") {
          name
          description
        }
      }
    }
  }
`;
