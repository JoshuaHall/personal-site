import React, { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { Link, graphql } from 'gatsby';

interface PortfolioPageProps {
  data: {
    github: {
      viewer: {
        drumMachine: GithubRepo;
        quickfrac: GithubRepo;
      };
    };
  };
}

interface GithubRepo {
  description: string;
}

export default function Portfolio({ data }: PortfolioPageProps): ReactElement<PortfolioPageProps> {
  const { drumMachine, quickfrac } = data.github.viewer;

  return (
    <DefaultLayout>
      <h1 className="title">Portfolio</h1>
      <h2 className="subtitle">A display of some of my work</h2>

      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <Link to="/portfolio/drum-machine">
              <p className="title">Drum Machine</p>
            </Link>
            <p className="content">{drumMachine.description}</p>
          </div>
          <div className="tile is-child box">
            <p className="title"></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <Link to="/portfolio/quickfrac">
              <p className="title">quickfrac</p>
            </Link>
            <p className="content">{quickfrac.description}</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query PortfolioQuery {
    github {
      viewer {
        drumMachine: repository(name: "drum-machine") {
          description
        }
        quickfrac: repository(name: "quickfrac") {
          description
        }
      }
    }
  }
`;
