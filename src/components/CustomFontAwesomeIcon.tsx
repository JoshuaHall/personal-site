import React, { ReactElement } from 'react';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export function CustomIcon(props: FontAwesomeIconProps): ReactElement<FontAwesomeIconProps> {
  return (
    <span className="icon">
      <FontAwesomeIcon {...props}></FontAwesomeIcon>
    </span>
  );
}
