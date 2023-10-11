/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui({
        prefix: "mac", // prefix for themes variables
        addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
        defaultTheme: "dark", // default theme from the themes object
        defaultExtendTheme: "dark", // default theme to extend on custom themes
        layout: {}, // common layout tokens (applied to all themes)
        themes: {
            light: {
                layout: {}, // light theme layout tokens
                colors: {
                    'primary': `#f9f9f9`,
                    'secondary': `#c1c1c1`,
                    'tertiary': `#7b7b7b`,

                    'background': `#f0f0f0`,

                    'item-bg': `#ececec`,
                    'item-divider': `#e1e1e1`,
                    'item-border': `#e4e4e4`,

                    'callout-background': `#f5f5f7`,
                    'callout-success': `#cff3cf`,
                    'callout-success-border': `#75dc75`, //darkened success color by 25% (equivalent to darken(#cff3cf, 25%)
                    'callout-warning': `#fefeee`,
                    'callout-warning-border': `#f7f77a`, //darkened warning color by 25% (equivalent to darken(#fefeee, 25%)
                    'callout-error': `#f9d5d8`,
                    'callout-error-border': `#eb707a`, //darkened error color by 25% (equivalent to darken(#f9d5d8, 25%)

                    'red': `#ff3b30`,
                    'orange': `#ff9500`,
                    'yellow': `#ffcc00`,
                    'green': `#28cd41`,
                    'mint': `#00c7be`,
                    'teal': `#59adc4`,
                    'cyan': `#55bef0`,
                    'blue': `#007aff`,
                    'indigo': `#5856d6`,
                    'purple': `#af52de`,
                    'pink': `#ff2d55`,
                    'brown': `#a2845e`,
                    'gray': `#8e8e93`,
                    'black': `#1d1d1f`,
                },
            },
            dark: {
                layout: {}, // dark theme layout tokens
                colors: {
                    'primary': `#0e0e0e`,
                    'secondary': `#575757`,
                    'tertiary': `#878787`,

                    'background': `#313031`,

                    'item-bg': `#494849`,
                    'item-divider': `#3e3d3e`,
                    'item-border': `#343334`,

                    'callout-background': `#1d1d1f`,
                    'callout-success': `#022d02`,
                    'callout-success-border': `#44ea44`, //darkened success color by 25% (equivalent to darken(#cff3cf, 25%)
                    'callout-warning': `#2d2c02`,
                    'callout-warning-border': `#eae544`, //darkened warning color by 25% (equivalent to darken(#fefeee, 25%)
                    'callout-error': `#330000`,
                    'callout-error-border': `#ff3037`, //darkened error color by 25% (equivalent to darken(#f9d5d8, 25%)

                    'red': `#ff453a`,
                    'orange': `#ff9f0a`,
                    'yellow': `#ffd60a`,
                    'green': `#32d74b`,
                    'mint': `#66d4cf`,
                    'teal': `#6ac4dc`,
                    'cyan': `#5ac8f5`,
                    'blue': `#0a84ff`,
                    'indigo': `#5e5ce6`,
                    'purple': `#bf5af2`,
                    'pink': `#ff375f`,
                    'brown': `#ac8e68`,
                    'gray': `#98989d`,
                    'white': `#ffffff`,
                    'black': `#000000`,
                },
            },
            // ... custom themes
        },
    })],
}
