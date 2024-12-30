/** @type {import('tailwindcss).Config}
 *
 */
const colors = require('tailwindcss/colors');

module.exports = {
   mode: 'jit',
   content: ['./src/**/*.{html,ts,css,scss,sass,less,styl'],
   theme: {
      colors: {
         blue: colors.blue,
         cyan: colors.cyan,
      },
   },
};
