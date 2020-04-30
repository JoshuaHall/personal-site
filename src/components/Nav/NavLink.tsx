import React, { ReactElement } from "react";
import { Link } from "gatsby";

interface NavLinkProps {
  href: string;
  text: string;
  isLast: boolean;
}

export function NavLink(props: NavLinkProps): ReactElement<NavLinkProps> {
  return (
    <Link
      to={props.href}
      className={"block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white" + (props.isLast ? "" : " mr-4")}
    >
      {props.text}
    </Link>
  );
}
