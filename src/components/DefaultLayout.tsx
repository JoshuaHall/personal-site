import React, { ReactElement } from 'react';

import { Layout } from './Layout';
import { ChildrenProps } from '../childrenProps';

export function DefaultLayout(props: ChildrenProps): ReactElement<ChildrenProps> {
  return (
    <Layout>
      <section className="section">
        <div className="container">{props.children}</div>
      </section>
    </Layout>
  );
}
