import React from 'react';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export function CustomIcon(props: FontAwesomeIconProps): JSX.Element {
  return (
    <span className="icon">
      <FontAwesomeIcon {...props}></FontAwesomeIcon>
    </span>
  );
}
