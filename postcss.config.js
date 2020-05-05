/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer(),
    cssnano({
      preset: 'default',
    }),
  ],
};
