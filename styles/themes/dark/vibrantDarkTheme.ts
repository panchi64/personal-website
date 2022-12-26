import {createTheme} from "@nextui-org/react";

// Following Apple's human interface guideline colors from https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications
const vibrantDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      red: `rgb(255,79,68)`,
      orange: `rgb(255,169,20)`,
      yellow: `rgb(255,224,20)`,
      green: `rgb(60,225,85)`,
      mint: `rgb(108,224,219)`,
      teal: `rgb(68,212,237)`,
      cyan: `rgb(90,205,250)`,
      blue: `rgb(20,142,255)`,
      indigo: `rgb(99,97,242)`,
      purple: `rgb(204,101,255)`,
      pink: `rgb(255,65,105)`,
      brown: `rgb(182,152,114)`,
      gray: `rgb(162,162,167)`,
    }
  }
});

export default vibrantDarkTheme;