// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const queries = require("./dist/query/index.cjs").queries;

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "gridsome-source-github-api",
      options: {
        token: "4082ed9cbade87cdb00eac65c7bc00b00d1df66f",
        graphQLQuery: queries,
      },
    },
  ],
};
