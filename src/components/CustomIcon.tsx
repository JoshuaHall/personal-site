import React, { ReactElement } from 'react';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface CustomIconProps extends FontAwesomeIconProps {
  alignWithText?: boolean;
}

export function CustomIcon(props: CustomIconProps): ReactElement<CustomIconProps> {
  return (
    <span className={`icon${props.alignWithText ? ' icon-with-text' : ''}`}>
      <FontAwesomeIcon {...props} />
    </span>
  );
}
