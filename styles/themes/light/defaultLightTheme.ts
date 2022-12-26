import {createTheme} from "@nextui-org/react";

// Following Apple's human interface guideline colors from https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications
const vibrantLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      red: `rgb(255,59,48)`,
      orange: `rgb(255,149,0)`,
      yellow: `rgb(255,204,0)`,
      green: `rgb(40,205,65)`,
      mint: `rgb(0,199,190)`,
      teal: `rgb(89,173,196)`,
      cyan: `rgb(85,190,240)`,
      blue: `rgb(0,122,255)`,
      indigo: `rgb(88,86,214)`,
      purple: `rgb(175,82,222)`,
      pink: `rgb(255,45,85)`,
      brown: `rgb(162,132,94)`,
      gray: `rgb(142,142,147)`,
    }
  }
});

export default vibrantLightTheme;