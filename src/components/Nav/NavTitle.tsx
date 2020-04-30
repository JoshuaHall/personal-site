import React, { ReactElement } from "react";
import { Link } from "gatsby";

interface NavTitleProps {
  title: string;
}

export function NavTitle(props: NavTitleProps): ReactElement<NavTitleProps> {
  return (
    <Link to="/">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">{props.title}</span>
      </div>
    </Link>
  );
}
