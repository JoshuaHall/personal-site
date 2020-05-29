import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import { ElmHandler } from '../../components/ElmHandler';

// Includes elm-canvas for use with elm-canvas and quickfrac
import 'elm-canvas';

import { PortfolioLinkPageProps } from '../portfolio';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';

// Sort of a messy hack, but just silences the useless/incorrect TS error.
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { Elm } from '../../../quickfrac/src/Main.elm';

export default function QuickfracPage({ data }: PortfolioLinkPageProps): ReactElement<PortfolioLinkPageProps> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function addPorts(appPorts: any): void {
    appPorts.clearCanvas.subscribe(() => {
      const scratchpad = document.querySelector('canvas') as HTMLCanvasElement;

      const scratchpadContext = scratchpad.getContext('2d') as CanvasRenderingContext2D;

      scratchpadContext.clearRect(0, 0, scratchpad.width, scratchpad.height);
    });
  }

  return (
    <PortfolioPageLayout element={<ElmHandler src={Elm.Main} ports={addPorts} />} {...data.github.viewer.repository} />
  );
}

export const query = graphql`
  query QuickfracQuery {
    github {
      viewer {
        repository(name: "quickfrac") {
          name
          description
        }
      }
    }
  }
`;
