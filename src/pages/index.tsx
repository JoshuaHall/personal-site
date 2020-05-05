import React, { ReactElement } from 'react';

import { DefaultLayout } from '../components/DefaultLayout';

export default function Index(): ReactElement {
  return (
    <DefaultLayout>
      <h1 className="title is-1">Hi! I&apos;m Joshua Hall.</h1>
    </DefaultLayout>
  );
}
