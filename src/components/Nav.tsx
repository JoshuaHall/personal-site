import React, { useState } from 'react';
import type { ReactElement } from 'react';

import { CustomIcon } from './CustomIcon';
import linkedinIcon from '@iconify/icons-fa-brands/linkedin';
import githubIcon from '@iconify/icons-fa-brands/github';

import type { ChildrenProps } from '../childrenProps';

import { not } from '../helperFunctions';
import { Link } from 'gatsby';

interface NavProps extends ChildrenProps {
  title: string;
  linkedInUrl: string;
  gitHubUrl: string;
}

export function Nav({ title, children, linkedInUrl, gitHubUrl }: NavProps): ReactElement<NavProps> {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu(): void {
    setMenuOpen(not);
  }

  const isActiveClass = isMenuOpen ? ' is-active' : '';

  return (
    <nav className="navbar is-fixed-top is-spaced is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h2 className="title">{title}</h2>
        </Link>
        <button
          className={`navbar-burger has-background-primary${isActiveClass}`}
          aria-label="menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={toggleMenu}
          type="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className={`navbar-menu${isActiveClass}`} onClick={toggleMenu} role="button" tabIndex={0}>
        <NavBeginning>{children}</NavBeginning>
        <NavEnding>
          <a
            className="navbar-item"
            href={linkedInUrl}
            aria-label="LinkedIn link with icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomIcon icon={linkedinIcon} />
          </a>
          <a
            className="navbar-item"
            href={gitHubUrl}
            aria-label="GitHub link with icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomIcon icon={githubIcon} />
          </a>
        </NavEnding>
      </div>
    </nav>
  );
}

export function NavBeginning({ children }: ChildrenProps): ReactElement<ChildrenProps> {
  return <div className="navbar-start">{children}</div>;
}

export function NavEnding({ children }: ChildrenProps): ReactElement<ChildrenProps> {
  return <div className="navbar-end">{children}</div>;
}

interface NavLinkProps {
  url: string;
  text: string;
}

export function NavLink({ url, text }: NavLinkProps): ReactElement<NavLinkProps> {
  return (
    <Link to={url} className="navbar-item">
      <h4>{text}</h4>
    </Link>
  );
}
