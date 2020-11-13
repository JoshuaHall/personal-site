import React from 'react';
import type { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';

export default function NotFound(): ReactElement {
  return (
    <DefaultLayout title="Not Found">
      <h1 className="title has-text-centered">Whatever you&apos;re looking for, it&apos;s not here.</h1>
    </DefaultLayout>
  );
}
