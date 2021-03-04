import React from 'react';
import type { ReactElement } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../components/Layout';

const imageWidth = 648;
const imageHeight = 615;

function EagerStaticIndexImage(props: { src: string; alt: string }): ReactElement {
  return <StaticImage src={props.src} alt={props.alt} loading="eager" width={imageWidth} height={imageHeight} />;
}

export default function Index(): ReactElement {
  return (
    <Layout title="Home" description="Home page of joshuahall.dev">
      <section className="hero is-medium is-secondary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Hi! I&apos;m Joshua Hall.</h1>
            <h2 className="subtitle">I like to program, game, climb, and a bunch of other things.</h2>
            <div className="columns is-centered">
              <div className="column">
                <EagerStaticIndexImage
                  src="../images/BridgePhoto.png"
                  alt="Photo of Joshua Hall (me) smiling at the camera"
                />
              </div>
              <div className="column">
                <EagerStaticIndexImage src="../images/Climbing.png" alt="Photo of Joshua Hall (me) rock climbing" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
