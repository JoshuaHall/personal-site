import React, { ReactElement, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import type { ChildrenProps } from "../../childrenProps";
import { NavTitle } from "./NavTitle";

import { not } from "../../helperFunctions";

interface NavProps extends ChildrenProps {
  title: string;
}

export function Nav(props: NavProps): ReactElement<NavProps> {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu(): void {
    setMenuOpen(not);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-700 p-6">
      <NavTitle title={props.title} />
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <NavContent isMenuOpen={isMenuOpen}>
        <NavBeginning>{props.children}</NavBeginning>
        <NavEnding>
          <a href="https://github.com/JoshuaHall">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </NavEnding>
      </NavContent>
    </nav>
  );
}

interface NavContent extends ChildrenProps {
  isMenuOpen: boolean;
}

export function NavContent(props: NavContent): ReactElement<NavContent> {
  return (
    <div
      className={`w-full ${props.isMenuOpen ? "block" : "hidden"} md:block flex-grow md:flex md:items-center md:w-auto`}
    >
      {props.children}
    </div>
  );
}

export function NavBeginning(props: ChildrenProps): ReactElement<ChildrenProps> {
  return <div className="text-sm md:flex-grow">{props.children}</div>;
}

export function NavEnding(props: ChildrenProps): ReactElement<ChildrenProps> {
  return <div>{props.children}</div>;
}
