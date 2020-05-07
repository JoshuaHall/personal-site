import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import { DefaultLayout } from '../../components/DefaultLayout';
import ElmHandler from '../../components/ElmHandler';

// Includes elm-canvas for use with quickfrac
import 'elm-canvas';
import { Elm } from '../../../quickfrac/src/Main.elm';

interface QuickfracPageProps {
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

export default function QuickfracPage({ data }: QuickfracPageProps): ReactElement<QuickfracPageProps> {
  const respositoryDescription = data.github.viewer.repository.description;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function addPorts(appPorts: any): void {
    appPorts.clearCanvas.subscribe(() => {
      const scratchpad = document.querySelector('canvas') as HTMLCanvasElement;

      const scratchpadContext = scratchpad.getContext('2d') as CanvasRenderingContext2D;

      scratchpadContext.clearRect(0, 0, scratchpad.width, scratchpad.height);
    });
  }

  return (
    <DefaultLayout>
      <h1 className="title">quickfrac</h1>
      <h2 className="subtitle">{respositoryDescription}</h2>

      <hr />

      <ElmHandler src={Elm.Main} ports={addPorts} />
    </DefaultLayout>
  );
}

export const query = graphql`
  query QuickfracQuery {
    github {
      viewer {
        repository(name: "quickfrac") {
          description
        }
      }
    }
  }
`;
