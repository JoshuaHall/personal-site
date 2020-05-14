/* eslint-disable @typescript-eslint/explicit-function-return-type */

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Joshua Hall`,
    description: `My blog and development portfolio`,
    author: `@JoshuaHall`,
    url: `https://joshuahall.dev`,
    keywords: ['portfolio', 'blog', 'joshua', 'hall'],
    image: '',
    myEmail: 'joshuahallmail@gmail.com',
    myPhone: '8166942490',
    myFormattedPhone: '(816) 694-2490',
    myLinkedIn: 'https://www.linkedin.com/in/joshuadouglashall/',
    myGitHub: 'https://github.com/JoshuaHall',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-elm`,
      options: {
        cwd: __dirname + '/quickfrac',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/typography/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        whitelist: [
          'html',
          'body',
          'buttons',
          'drum-pad',
          'slider',
          'field',
          'control',
          'input',
          'textarea',
          'is-large',
          'level',
          'level-left',
          'level-right',
          'level-item',
          'button',
          'is-capitalized',
          'is-danger',
          'is-warning',
          'is-info',
          'language-javascript',
          'pre',
          'column',
          'columns',
          'editor',
          'pagination',
          'pagination-previous',
          'pagination-next',
          'pagination-list',
          'pagination-link',
          'is-current',
        ],
        ignore: ['prismjs/'],
      },
    },
  ],
};
