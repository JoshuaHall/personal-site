import React from 'react';
import type { ReactElement } from 'react';

import { graphql } from 'gatsby';

import type { PortfolioLinkPageProps } from '../portfolio';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

import { DrumMachine, initVolume, initDrumPadData } from 'drum-machine';

export default function DrumMachinePage({ data }: PortfolioLinkPageProps): ReactElement<PortfolioLinkPageProps> {
  return (
    <PortfolioPageLayout
      element={<DrumMachine initialVolume={initVolume} drumPadData={initDrumPadData} />}
      {...data.github.viewer.repository}
    />
  );
}

export const query = graphql`
  query DrumMachineQuery {
    github {
      viewer {
        repository(name: "drum-machine") {
          name
          description
        }
      }
    }
  }
`;
