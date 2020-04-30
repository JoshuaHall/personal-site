import React, { ReactElement } from "react";

import { DefaultBody } from "../components/DefaultBody";

export default function Blog(): ReactElement {
  return (
    <DefaultBody>
      <div className="container max-w-md mx-auto mt-10">
        <p>This is my blog</p>
      </div>
    </DefaultBody>
  );
}
