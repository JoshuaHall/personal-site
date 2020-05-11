import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import { Nav } from './Nav';
import { NavLink } from './Nav';
import { ChildrenProps } from '../childrenProps';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Footer } from './Footer';
import { SEO } from './SEO';

export interface LayoutProps extends ChildrenProps {
  title?: string;
  description?: string;
}

export function Layout({ children, title, description }: LayoutProps): ReactElement<LayoutProps> {
  const { title: siteTitle, author, description: siteDescription } = useSiteMetadata();

  return (
    <React.StrictMode>
      <Helmet>
        <html lang="en" className="has-navbar-fixed-top" />
        <title>{title}</title>
      </Helmet>
      <SEO author={author} description={description || siteDescription} />
      <Nav title={siteTitle}>
        <NavLink href="/blog/" text="Blog" />
        <NavLink href="/portfolio/" text="Portfolio" />
        <NavLink href="/resume/" text="Resume" />
        <NavLink href="/contact/" text="Contact" />
      </Nav>
      {children}
      <Footer />
    </React.StrictMode>
  );
}
