// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Typography from 'typography';

import lincolnTheme from 'typography-theme-lincoln';

lincolnTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: 'none',
    backgroundImage: 'none',
  },
  blockquote: {
    borderLeft: 'none',
  },
});

const headerFontName = 'Rosario';
const bodyFontName = 'Lora';

lincolnTheme.headerFontFamily = [headerFontName, ...lincolnTheme.headerFontFamily];
lincolnTheme.bodyFontFamily = [bodyFontName, ...lincolnTheme.bodyFontFamily];

lincolnTheme.googleFonts = [
  { name: bodyFontName, styles: ['400', '400i', '700'] },
  { name: headerFontName, styles: ['700'] },
];

const typography = new Typography(lincolnTheme);

export const { scale, rhythm, options } = typography;

export default typography;
