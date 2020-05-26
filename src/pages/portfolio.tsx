import React, { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';
import { Link, graphql } from 'gatsby';
import { ExternalLinkNewTabWithIcon } from '../components/ExternalLink';

interface GithubRepo {
  name: string;
  description: string;
}

interface PortfolioTileLinkProps extends GithubRepo {
  url: string;
}

function PortfolioTileLink({ url, name, description }: PortfolioTileLinkProps): ReactElement<PortfolioTileLinkProps> {
  return (
    <>
      <Link to={url}>
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
        elmFraction: GithubRepo;
        quickfrac: GithubRepo;
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
    elmFraction,
    quickfrac,
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
      <PortfolioTileExternalLink url="https://github.com/JoshuaHall/elm-fraction" {...elmFraction} />
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
        elmFraction: repository(name: "elm-fraction") {
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
