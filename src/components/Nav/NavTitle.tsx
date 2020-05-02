import React, { ReactElement } from "react";
import { Link } from "gatsby";

interface NavTitleProps {
  title: string;
}

export function NavTitle(props: NavTitleProps): ReactElement<NavTitleProps> {
  return (
    <Link to="/">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}
