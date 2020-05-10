import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import createDOMPurify from 'dompurify';

import { MarkdownPreviewer, initialEditorInput } from 'markdown-previewer';
import { PortfolioPageLayout } from '../../components/PortfolioPageLayout';
import { DefaultLayout } from '../../components/DefaultLayout';

interface MarkdownPreviewerPageProps {
  data: {
    github: {
      viewer: {
        repository: {
          name: string;
          description: string;
        };
      };
    };
  };
}

export default function MarkdownPreviewerPage({
  data,
}: MarkdownPreviewerPageProps): ReactElement<MarkdownPreviewerPageProps> {
  if (typeof window !== 'undefined') {
    const purifier = createDOMPurify(window);

    return (
      <PortfolioPageLayout
        element={<MarkdownPreviewer initInput={initialEditorInput} purifier={purifier} />}
        {...data.github.viewer.repository}
      />
    );
  } else {
    return (
      <DefaultLayout>
        <h1 className="title">Loading...</h1>
      </DefaultLayout>
    );
  }
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
