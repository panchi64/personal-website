import {createTheme} from "@nextui-org/react";

// Following Apple's human interface guideline colors from https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications
const accessibleLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      red: `rgb(215,0,21)`,
      orange: `rgb(201,52,0)`,
      yellow: `rgb(160,90,0)`,
      green: `rgb(0,125,27)`,
      mint: `rgb(12,129,123)`,
      teal: `rgb(0,130,153)`,
      cyan: `rgb(0,113,164)`,
      blue: `rgb(0,64,221)`,
      indigo: `rgb(54,52,163)`,
      purple: `rgb(173,68,171)`,
      pink: `rgb(211,15,69)`,
      brown: `rgb(127,101,69)`,
      gray: `rgb(105,105,110)`,
    }
  }
});

export default accessibleLightTheme;