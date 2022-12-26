import {createTheme} from "@nextui-org/react";

// Following Apple's human interface guideline colors from https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications
const accessibleAndVibrantLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      red: `rgb(194,6,24)`,
      orange: `rgb(173,58,0)`,
      yellow: `rgb(146,81,0)`,
      green: `rgb(0,113,24)`,
      mint: `rgb(11,117,112)`,
      teal: `rgb(0,119,140)`,
      cyan: `rgb(0,103,150)`,
      blue: `rgb(0,64,221)`,
      indigo: `rgb(54,52,163)`,
      purple: `rgb(173,68,171)`,
      pink: `rgb(193,16,50)`,
      brown: `rgb(119,93,59)`,
      gray: `rgb(97,97,101)`,
    }
  }
});

export default accessibleAndVibrantLightTheme;