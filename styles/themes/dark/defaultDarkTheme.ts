import {createTheme} from "@nextui-org/react";

// Following Apple's human interface guideline colors from https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications
const defaultDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      red: `rgb(255,69,58)`,
      orange: `rgb(255,159,10)`,
      yellow: `rgb(255,214,10)`,
      green: `rgb(50,215,75)`,
      mint: `rgb(102,212,207)`,
      teal: `rgb(106,196,220)`,
      cyan: `rgb(90,200,245)`,
      blue: `rgb(10,132,255)`,
      indigo: `rgb(94,92,230)`,
      purple: `rgb(191,90,242)`,
      pink: `rgb(255,55,95)`,
      brown: `rgb(172,142,104)`,
      gray: `rgb(152,152,157)`,
    }
  }
});

export default defaultDarkTheme;