import React from 'react';
import type { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { Link, graphql } from 'gatsby';
import { ExternalLinkNewTabWithIcon } from '../components/ExternalLink';

export interface GithubRepo {
  name: string;
  description: string;
}

export interface PortfolioLinkPageProps {
  data: {
    github: {
      viewer: {
        repository: GithubRepo;
      };
    };
  };
}

function createPortfolioUrl(name: string): string {
  return `/portfolio/${name}`;
}

type PortfolioTileLinkProps = GithubRepo;

function PortfolioTileLink({ name, description }: PortfolioTileLinkProps): ReactElement<PortfolioTileLinkProps> {
  return (
    <>
      <Link to={createPortfolioUrl(name)}>
        <h3 className="title">{name}</h3>
      </Link>
      <p className="content">{description}</p>
    </>
  );
}

interface PortfolioTileExternalLinkProps extends GithubRepo {
  url: string;
}

function PortfolioTileExternalLink({
  url,
  name,
  description,
}: PortfolioTileExternalLinkProps): ReactElement<PortfolioTileExternalLinkProps> {
  return (
    <>
      <ExternalLinkNewTabWithIcon href={url}>
        <h3 className="title">{name}</h3>
      </ExternalLinkNewTabWithIcon>
      <p className="content">{description}</p>
    </>
  );
}

interface PortfolioPageProps {
  data: {
    github: {
      viewer: {
        personalPortfolio: GithubRepo;
        elmFraction: GithubRepo;
        quickfrac: GithubRepo;
        gameOfLife: GithubRepo;
        quoteBox: GithubRepo;
        markdownPreviewer: GithubRepo;
        drumMachine: GithubRepo;
        calculator: GithubRepo;
        pomodoroClock: GithubRepo;
      };
    };
  };
}

export default function Portfolio({ data }: PortfolioPageProps): ReactElement<PortfolioPageProps> {
  const {
    personalPortfolio,
    elmFraction,
    quickfrac,
    gameOfLife,
    quoteBox,
    markdownPreviewer,
    drumMachine,
    calculator,
    pomodoroClock,
  } = data.github.viewer;

  return (
    <DefaultLayout title="Portfolio">
      <h2 className="title is-2">Portfolio</h2>
      <h4 className="subtitle">A display of some of my work</h4>

      <hr />

      <h3 className="title">Personal Projects:</h3>
      <PortfolioTileExternalLink url="https://github.com/JoshuaHall/personal-site" {...personalPortfolio} />
      <PortfolioTileExternalLink url="https://github.com/JoshuaHall/elm-fraction" {...elmFraction} />
      <PortfolioTileLink {...quickfrac} />
      <PortfolioTileLink {...gameOfLife} />

      <hr />

      <h3 className="title">FreeCodeCamp.org Front End Libraries Certification Projects:</h3>
      <PortfolioTileLink {...quoteBox} />
      <PortfolioTileLink {...markdownPreviewer} />
      <PortfolioTileLink {...drumMachine} />
      <PortfolioTileLink {...calculator} />
      <PortfolioTileLink {...pomodoroClock} />
    </DefaultLayout>
  );
}

export const query = graphql`
  query PortfolioQuery {
    github {
      viewer {
        personalPortfolio: repository(name: "personal-site") {
          name
          description
        }
        elmFraction: repository(name: "elm-fraction") {
          name
          description
        }
        quickfrac: repository(name: "quickfrac") {
          name
          description
        }
        gameOfLife: repository(name: "game-of-life") {
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
