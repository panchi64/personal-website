/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // Colors do be used for dark mode
      'dark-primary': `#0e0e0e`,
      'dark-secondary': `#575757`,
      'dark-tertiary': `#878787`,

      'dark-background': `#313031`,

      'dark-item-bg': `#494849`,
      'dark-item-divider': `#3e3d3e`,
      'dark-item-border': `#343334`,

      'dark-callout-background': `#1d1d1f`,
      'dark-callout-success': `#022d02`,
      'dark-callout-success-border': `#44ea44`, //darkened success color by 25% (equivalent to darken(#cff3cf, 25%)
      'dark-callout-warning': `#2d2c02`,
      'dark-callout-warning-border': `#eae544`, //darkened warning color by 25% (equivalent to darken(#fefeee, 25%)
      'dark-callout-error': `#330000`,
      'dark-callout-error-border': `#ff3037`, //darkened error color by 25% (equivalent to darken(#f9d5d8, 25%)

      'dark-red': `#ff453a`,
      'dark-orange': `#ff9f0a`,
      'dark-yellow': `#ffd60a`,
      'dark-green': `#32d74b`,
      'dark-mint': `#66d4cf`,
      'dark-teal': `#6ac4dc`,
      'dark-cyan': `#5ac8f5`,
      'dark-blue': `#0a84ff`,
      'dark-indigo': `#5e5ce6`,
      'dark-purple': `#bf5af2`,
      'dark-pink': `#ff375f`,
      'dark-brown': `#ac8e68`,
      'dark-gray': `#98989d`,
      'dark-white': `#ffffff`,
      'dark-black': `#000000`,

      // Colors do be used for light mode
      'light-primary': `#f9f9f9`,
      'light-secondary': `#c1c1c1`,
      'light-tertiary': `#7b7b7b`,

      'light-background': `#f0f0f0`,

      'light-item-bg': `#ececec`,
      'light-item-divider': `#e1e1e1`,
      'light-item-border': `#e4e4e4`,

      'light-callout-background': `#f5f5f7`,
      'light-callout-success': `#cff3cf`,
      'light-callout-success-border': `#75dc75`, //darkened success color by 25% (equivalent to darken(#cff3cf, 25%)
      'light-callout-warning': `#fefeee`,
      'light-callout-warning-border': `#f7f77a`, //darkened warning color by 25% (equivalent to darken(#fefeee, 25%)
      'light-callout-error': `#f9d5d8`,
      'light-callout-error-border': `#eb707a`, //darkened error color by 25% (equivalent to darken(#f9d5d8, 25%)

      'light-red': `#ff3b30`,
      'light-orange': `#ff9500`,
      'light-yellow': `#ffcc00`,
      'light-green': `#28cd41`,
      'light-mint': `#00c7be`,
      'light-teal': `#59adc4`,
      'light-cyan': `#55bef0`,
      'light-blue': `#007aff`,
      'light-indigo': `#5856d6`,
      'light-purple': `#af52de`,
      'light-pink': `#ff2d55`,
      'light-brown': `#a2845e`,
      'light-gray': `#8e8e93`,
      'light-black': `#1d1d1f`,
    },
  },
  plugins: [],
};
