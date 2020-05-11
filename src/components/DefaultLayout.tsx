import React, { ReactElement } from 'react';

import { Layout, LayoutProps } from './Layout';

export function DefaultLayout({ children, title, description }: LayoutProps): ReactElement<LayoutProps> {
  return (
    <Layout title={title} description={description}>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </Layout>
  );
}
