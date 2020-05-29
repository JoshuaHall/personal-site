import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import createDOMPurify from 'dompurify';

import { PortfolioLinkPageProps } from '../portfolio';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';
import { DefaultLayout } from '../../components/DefaultLayout';

import { MarkdownPreviewer, initialEditorInput } from 'markdown-previewer';

export default function MarkdownPreviewerPage({ data }: PortfolioLinkPageProps): ReactElement<PortfolioLinkPageProps> {
  if (typeof window !== 'undefined') {
    const purifier = createDOMPurify(window);

    return (
      <PortfolioPageLayout
        element={<MarkdownPreviewer initInput={initialEditorInput} purifier={purifier} />}
        {...data.github.viewer.repository}
      />
    );
  }

  return (
    <DefaultLayout>
      <h1 className="title">Loading...</h1>
    </DefaultLayout>
  );
}

export const query = graphql`
  query MarkdownPreviewerQuery {
    github {
      viewer {
        repository(name: "markdown-previewer") {
          name
          description
        }
      }
    }
  }
`;
