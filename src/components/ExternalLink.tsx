import React from 'react';
import type { ReactElement } from 'react';
import { CustomIcon } from './CustomIcon';

import externalLinkIcon from '@iconify/icons-fa-solid/external-link-alt';

export function ExternalLinkWithIcon(
  props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
): ReactElement {
  return (
    <a {...props} rel="noopener noreferrer" className="is-flex">
      {props.children}
      <CustomIcon icon={externalLinkIcon} width="1em" height="1em" />
    </a>
  );
}

export function ExternalLinkNewTabWithIcon(
  props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
): ReactElement {
  return <ExternalLinkWithIcon {...props} target="_blank" />;
}
