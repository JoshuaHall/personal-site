/* eslint-disable @typescript-eslint/no-var-requires */
const cssnano = require(`cssnano`);

module.exports = {
  plugins: [
    require(`autoprefixer`),
    cssnano({
      preset: `default`,
    }),
  ],
};
