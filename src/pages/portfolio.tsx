import React, { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { Link, graphql } from 'gatsby';

interface GithubRepo {
  name: string;
  description: string;
}

interface PortfolioTileLinkProps extends GithubRepo {
  url: string;
}

function PortfolioTileLink({ name, description, url }: PortfolioTileLinkProps): ReactElement<PortfolioTileLinkProps> {
  return (
    <div className="tile is-child box">
      <Link to={url}>
        <p className="title">{name}</p>
      </Link>
      <p className="content">{description}</p>
    </div>
  );
}

interface PortfolioPageProps {
  data: {
    github: {
      viewer: {
        drumMachine: GithubRepo;
        quickfrac: GithubRepo;
        quoteBox: GithubRepo;
        markdownPreviewer: GithubRepo;
        calculator: GithubRepo;
        pomodoroClock: GithubRepo;
      };
    };
  };
}

export default function Portfolio({ data }: PortfolioPageProps): ReactElement<PortfolioPageProps> {
  const { drumMachine, quickfrac, quoteBox, markdownPreviewer, calculator, pomodoroClock } = data.github.viewer;

  return (
    <DefaultLayout title="Portfolio">
      <h1 className="title">Portfolio</h1>
      <h2 className="subtitle">A display of some of my work</h2>

      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <PortfolioTileLink url="/portfolio/drum-machine" {...drumMachine} />
          <PortfolioTileLink url="/portfolio/quote-box" {...quoteBox} />
        </div>
        <div className="tile is-parent">
          <PortfolioTileLink url="/portfolio/quickfrac" {...quickfrac} />
        </div>
        <div className="tile is-parent">
          <PortfolioTileLink url="/portfolio/markdown-previewer" {...markdownPreviewer} />
        </div>
        <div className="tile is-parent">
          <PortfolioTileLink url="/portfolio/calculator" {...calculator} />
        </div>
        <div className="tile is-parent">
          <PortfolioTileLink url="/portfolio/pomodoro-clock" {...pomodoroClock} />
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
          name
          description
        }
        quickfrac: repository(name: "quickfrac") {
          name
          description
        }
        quoteBox: repository(name: "quote-box") {
          name
          description
        }
        markdownPreviewer: repository(name: "markdown-previewer") {
          name
          description
        }
        calculator: repository(name: "calculator") {
          name
          description
        }
        pomodoroClock: repository(name: "pomodoro-clock") {
          name
          description
        }
      }
    }
  }
`;
