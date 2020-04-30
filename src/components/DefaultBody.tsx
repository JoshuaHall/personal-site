import React, { ReactElement, ReactNode } from "react";

import { Nav } from "./Nav/Nav";
import { NavLink } from "./Nav/NavLink";

interface DefaultBodyProps {
  children: ReactNode;
}

export function DefaultBody(props: DefaultBodyProps): ReactElement<DefaultBodyProps> {
  return (
    <>
      <Nav title="Joshua Hall">
        <NavLink href="/blog/" text="Blog" isLast={false} />
        <NavLink href="#" text="Portfolio" isLast={false} />
        <NavLink href="#" text="About Me" isLast={false} />
        <NavLink href="#" text="Contact" isLast={true} />
      </Nav>
      {props.children}
      <footer>&copy;2020 Joshua Hall</footer>
    </>
  );
}
