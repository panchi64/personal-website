/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Dark Mode
                'mac-dark-primary': `#0e0e0e`,
                'mac-dark-secondary': `#575757`,
                'mac-dark-tertiary': `#878787`,

                'mac-dark-background': `#313031`,

                'mac-dark-item-bg': `#494849`,
                'mac-dark-item-divider': `#3e3d3e`,
                'mac-dark-item-border': `#343334`,

                'mac-dark-callout-background': `#1d1d1f`,
                'mac-dark-callout-success': `#022d02`,
                'mac-dark-callout-success-border': `#44ea44`, //darkened success color by 25% (equivalent to darken(#cff3cf, 25%)
                'mac-dark-callout-warning': `#2d2c02`,
                'mac-dark-callout-warning-border': `#eae544`, //darkened warning color by 25% (equivalent to darken(#fefeee, 25%)
                'mac-dark-callout-error': `#330000`,
                'mac-dark-callout-error-border': `#ff3037`, //darkened error color by 25% (equivalent to darken(#f9d5d8, 25%)

                'mac-dark-red': `#ff453a`,
                'mac-dark-orange': `#ff9f0a`,
                'mac-dark-yellow': `#ffd60a`,
                'mac-dark-green': `#32d74b`,
                'mac-dark-mint': `#66d4cf`,
                'mac-dark-teal': `#6ac4dc`,
                'mac-dark-cyan': `#5ac8f5`,
                'mac-dark-blue': `#0a84ff`,
                'mac-dark-indigo': `#5e5ce6`,
                'mac-dark-purple': `#bf5af2`,
                'mac-dark-pink': `#ff375f`,
                'mac-dark-brown': `#ac8e68`,
                'mac-dark-gray': `#98989d`,
                'mac-dark-white': `#ffffff`,
                'mac-dark-black': `#000000`,

                // Light Mode
                'mac-light-primary': `#f9f9f9`,
                'mac-light-secondary': `#c1c1c1`,
                'mac-light-tertiary': `#7b7b7b`,

                'mac-light-background': `#f0f0f0`,

                'mac-light-item-bg': `#ececec`,
                'mac-light-item-divider': `#e1e1e1`,
                'mac-light-item-border': `#e4e4e4`,

                'mac-light-callout-background': `#f5f5f7`,
                'mac-light-callout-success': `#cff3cf`,
                'mac-light-callout-success-border': `#75dc75`, //darkened success color by 25% (equivalent to darken(#cff3cf, 25%)
                'mac-light-callout-warning': `#fefeee`,
                'mac-light-callout-warning-border': `#f7f77a`, //darkened warning color by 25% (equivalent to darken(#fefeee, 25%)
                'mac-light-callout-error': `#f9d5d8`,
                'mac-light-callout-error-border': `#eb707a`, //darkened error color by 25% (equivalent to darken(#f9d5d8, 25%)

                'mac-light-red': `#ff3b30`,
                'mac-light-orange': `#ff9500`,
                'mac-light-yellow': `#ffcc00`,
                'mac-light-green': `#28cd41`,
                'mac-light-mint': `#00c7be`,
                'mac-light-teal': `#59adc4`,
                'mac-light-cyan': `#55bef0`,
                'mac-light-blue': `#007aff`,
                'mac-light-indigo': `#5856d6`,
                'mac-light-purple': `#af52de`,
                'mac-light-pink': `#ff2d55`,
                'mac-light-brown': `#a2845e`,
                'mac-light-gray': `#8e8e93`,
                'mac-light-black': `#1d1d1f`,
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}
