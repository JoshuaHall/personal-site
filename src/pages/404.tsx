import React, { ReactElement } from "react";

import { DefaultLayout } from "../components/DefaultLayout";

export default function NotFound(): ReactElement {
  return (
    <DefaultLayout>
      <div className="container max-w-md mx-auto mt-10">
        <h1>Whatever you&apos;re looking for, it&apos;s not here.</h1>
      </div>
    </DefaultLayout>
  );
}
