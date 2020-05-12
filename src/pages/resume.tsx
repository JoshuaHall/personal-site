import React, { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';

export default function Resume(): ReactElement {
  return (
    <DefaultLayout title="Resume">
      <p className="content">This will eventually be my resume.</p>
    </DefaultLayout>
  );
}
