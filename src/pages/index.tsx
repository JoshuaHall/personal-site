import React, { ReactElement } from 'react';

import { Layout } from '../components/Layout';

export default function Index(): ReactElement {
  return (
    <Layout title="Home">
      <section className="hero is-medium is-secondary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Hi! I&apos;m Joshua Hall.</h1>
            <h2 className="subtitle">I like to program, game, climb, and a bunch of other things.</h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}
