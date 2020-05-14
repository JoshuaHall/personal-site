import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import { DrumMachine, initVolume, initDrumPadData } from 'drum-machine';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

interface DrumMachinePageProps {
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

export default function DrumMachinePage({ data }: DrumMachinePageProps): ReactElement<DrumMachinePageProps> {
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
