import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import { Layout } from '../components/Layout';

type GatsbyImageType = FluidObject | FluidObject[];

interface GatsbyChildImageSharp {
  childImageSharp: {
    fluid: GatsbyImageType;
  };
}

interface IndexPageProps {
  data: {
    portrait: GatsbyChildImageSharp;
    climbing: GatsbyChildImageSharp;
  };
}

export default function Index({ data }: IndexPageProps): ReactElement<IndexPageProps> {
  return (
    <Layout title="Home" description="Home page of joshuahall.dev">
      <section className="hero is-medium is-secondary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Hi! I&apos;m Joshua Hall.</h1>
            <h2 className="subtitle">I like to program, game, climb, and a bunch of other things.</h2>
            <div className="columns is-centered">
              <div className="column">
                <Img
                  fluid={data.portrait.childImageSharp.fluid}
                  alt="Photo of Joshua Hall (me) smiling at the camera"
                />
              </div>
              <div className="column">
                <Img fluid={data.climbing.childImageSharp.fluid} alt="Photo of Joshua Hall (me) rock climbing" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  fragment defaultImage on File {
    childImageSharp {
      fluid(maxWidth: 648, maxHeight: 615, quality: 100) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  query {
    portrait: file(relativePath: { eq: "BridgePhoto.png" }) {
      ...defaultImage
    }
    climbing: file(relativePath: { eq: "Climbing.png" }) {
      ...defaultImage
    }
  }
`;
