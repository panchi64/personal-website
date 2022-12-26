import {createTheme} from "@nextui-org/react";

// Following Apple's human interface guideline colors from https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications
const accessibleAndVibrantDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      red: `rgb(255,65,54)`,
      orange: `rgb(255,179,64)`,
      yellow: `rgb(255,212,38)`,
      green: `rgb(49,222,75)`,
      mint: `rgb(102,212,207)`,
      teal: `rgb(93,230,255)`,
      cyan: `rgb(112,215,255)`,
      blue: `rgb(64,156,255)`,
      indigo: `rgb(125,122,255)`,
      purple: `rgb(218,143,255)`,
      pink: `rgb(255,58,95)`,
      brown: `rgb(181,148,105)`,
      gray: `rgb(152,152,157)`,
    }
  }
});

export default accessibleAndVibrantDarkTheme;