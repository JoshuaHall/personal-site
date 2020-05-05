import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import { DefaultLayout } from '../../components/DefaultLayout';

import DrumMachine from 'drum-machine';

interface DrumMachinePageProps {
  data: {
    github: {
      viewer: {
        repository: {
          description: string;
        };
      };
    };
  };
}

export default function DrumMachinePage({ data }: DrumMachinePageProps): ReactElement<DrumMachinePageProps> {
  const respositoryDescription = data.github.viewer.repository.description;

  return (
    <DefaultLayout>
      <h1 className="title">DrumMachine</h1>
      <h2 className="subtitle">{respositoryDescription}</h2>

      <hr />

      <DrumMachine />
    </DefaultLayout>
  );
}

export const query = graphql`
  query DrumMachineQuery {
    github {
      viewer {
        repository(name: "drum-machine") {
          description
        }
      }
    }
  }
`;
