import React, { ReactElement, useState } from 'react';

import { CustomIcon } from './CustomFontAwesomeIcon';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { ChildrenProps } from '../childrenProps';

import { not } from '../helperFunctions';
import { Link } from 'gatsby';

interface NavProps extends ChildrenProps {
  title: string;
}

export function Nav({ title, children }: NavProps): ReactElement<NavProps> {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu(): void {
    setMenuOpen(not);
  }

  return (
    <nav className="navbar is-fixed-top is-spaced is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h2 className="title">{title}</h2>
        </Link>
        <a
          role="button"
          className={`navbar-burger${isMenuOpen ? ' is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu${isMenuOpen ? ' is-active' : ''}`} onClick={toggleMenu} role="button">
        <NavBeginning>{children}</NavBeginning>
        <NavEnding>
          <a
            className="navbar-item"
            href="https://www.linkedin.com/in/joshuadouglashall/"
            aria-label="LinkedIn link with icon"
          >
            <CustomIcon icon={faLinkedin} size="lg" />
          </a>
          <a className="navbar-item" href="https://github.com/JoshuaHall" aria-label="GitHub link with icon">
            <CustomIcon icon={faGithub} size="lg" />
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
  href: string;
  text: string;
}

export function NavLink({ href, text }: NavLinkProps): ReactElement<NavLinkProps> {
  return (
    <Link to={href} className="navbar-item">
      <h4>{text}</h4>
    </Link>
  );
}
