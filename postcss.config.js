/* eslint-disable @typescript-eslint/no-var-requires */
const stylelint = require('stylelint');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    stylelint(),
    autoprefixer(),
    cssnano({
      preset: 'default',
    }),
  ],
};
