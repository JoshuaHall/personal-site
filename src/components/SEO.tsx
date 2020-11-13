import React from 'react';
import type { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import type { MetaItem } from '../hooks/useSiteMetadata';

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  author?: string;
  keywords?: string[];
  meta?: MetaItem[];
  image?: string;
};

export function SEO(props: SEOProps): ReactElement<SEOProps> {
  const { title, description, url, author, keywords = [], image } = useSiteMetadata();

  const siteTitle = props.title || title;
  const siteDescription = props.description || description;
  const siteUrl = props.url || url;
  const siteAuthor = props.author || author;
  const siteImage = props.image || image;
  const siteKeywords = [...keywords, props.keywords].join(',');

  const metaData = [
    {
      name: 'canonical',
      content: siteUrl,
    },
    {
      name: 'description',
      content: siteDescription,
    },
    {
      name: 'image',
      content: siteImage,
    },
    {
      name: 'og:url',
      content: siteUrl,
    },
    {
      name: 'og:type',
      content: 'article',
    },
    {
      name: 'og:title',
      content: siteTitle,
    },
    {
      name: 'og:description',
      content: siteDescription,
    },
    {
      name: 'og:image',
      content: siteImage,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:creator',
      content: siteAuthor,
    },
    {
      name: 'twitter:title',
      content: siteTitle,
    },
    {
      name: 'twitter:description',
      content: siteDescription,
    },
    {
      name: 'twitter:image',
      content: siteImage,
    },
    {
      name: 'keywords',
      content: siteKeywords,
    },
  ];

  const linkData = [
    {
      rel: 'shortcut icon',
      href: 'favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: 'icons/apple-touch-icon.png',
    },
  ];

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle={siteTitle}
      titleTemplate={`%s | ${siteTitle}`}
      meta={metaData}
      link={linkData}
    />
  );
}
