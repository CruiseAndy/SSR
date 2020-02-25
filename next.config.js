const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

// module.exports = withCSS({
//   /* config options here */
//   exportPathMap: function () {
//     return {
//       '/': { page: '/' }
//     }
//   }
// });

module.exports = withSass({
  /* config options here */
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
});