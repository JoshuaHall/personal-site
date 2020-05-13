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

function PortfolioTileLink({ url, name, description }: PortfolioTileLinkProps): ReactElement<PortfolioTileLinkProps> {
  return (
    <div className="columns">
      <div className="column">
        <Link to={url}>
          <h3 className="title">{name}</h3>
        </Link>
        <p className="content">{description}</p>
      </div>
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
      <h2 className="title is-2">Portfolio</h2>
      <h4 className="subtitle">A display of some of my work</h4>

      <hr />

      <h3 className="title">Personal Projects:</h3>
      <PortfolioTileLink url="/portfolio/quickfrac" {...quickfrac} />

      <hr />

      <h3 className="title">FreeCodeCamp.org Front End Libraries Certification Projects:</h3>
      <PortfolioTileLink url="/portfolio/quote-box" {...quoteBox} />
      <PortfolioTileLink url="/portfolio/markdown-previewer" {...markdownPreviewer} />
      <PortfolioTileLink url="/portfolio/drum-machine" {...drumMachine} />
      <PortfolioTileLink url="/portfolio/calculator" {...calculator} />
      <PortfolioTileLink url="/portfolio/pomodoro-clock" {...pomodoroClock} />
    </DefaultLayout>
  );
}

export const query = graphql`
  query PortfolioQuery {
    github {
      viewer {
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
        drumMachine: repository(name: "drum-machine") {
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
