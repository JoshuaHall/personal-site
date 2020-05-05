import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import { Nav } from './Nav';
import { NavLink } from './Nav';
import { ChildrenProps } from '../childrenProps';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Footer } from './Footer';

export function DefaultLayout(props: ChildrenProps): ReactElement<ChildrenProps> {
  const { title, description, author } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="robots" content="follow" />
        <html lang="en" />
      </Helmet>
      <Nav title={title}>
        <NavLink href="/blog/" text="Blog" isLast={false} />
        <NavLink href="/portfolio/" text="Portfolio" isLast={false} />
        <NavLink href="/resume/" text="Resume" isLast={false} />
        <NavLink href="/contact/" text="Contact" isLast={true} />
      </Nav>
      <section className="section">
        <div className="container">{props.children}</div>
      </section>
      <Footer />
    </>
  );
}
