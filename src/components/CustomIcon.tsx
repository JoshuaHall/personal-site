import React from 'react';
import type { ReactElement } from 'react';

import { Icon } from '@iconify/react';
import type { IconifyIcon } from '@iconify/react';

interface CustomIconProps extends IconifyIcon {
  alignWithText?: boolean;
}

const widthAndHeight = '1.4em';

export function CustomIcon(props: CustomIconProps): ReactElement<CustomIconProps> {
  return (
    <span className={`icon${props.alignWithText ? ' icon-with-text' : ''}`}>
      <Icon {...props} width={props.width || widthAndHeight} height={props.height || widthAndHeight} />
    </span>
  );
}
