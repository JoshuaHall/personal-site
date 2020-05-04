import React, { ReactElement } from "react";

import { DefaultLayout } from "../components/DefaultLayout";

export default function NotFound(): ReactElement {
  return (
    <DefaultLayout>
      <h1 className="title">Whatever you&apos;re looking for, it&apos;s not here.</h1>
    </DefaultLayout>
  );
}
