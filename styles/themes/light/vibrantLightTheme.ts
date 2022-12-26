import {createTheme} from "@nextui-org/react";

// Following Apple's human interface guideline colors from https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications
const vibrantLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      red: `rgb(255,49,38)`,
      orange: `rgb(245,139,0)`,
      yellow: `rgb(245,194,0)`,
      green: `rgb(30,195,55)`,
      mint: `rgb(0,189,180)`,
      teal: `rgb(46,167,189)`,
      cyan: `rgb(65,175,220)`,
      blue: `rgb(0,112,245)`,
      indigo: `rgb(84,82,204)`,
      purple: `rgb(159,75,201)`,
      pink: `rgb(245,35,75)`,
      brown: `rgb(152,122,84)`,
      gray: `rgb(132,132,137)`,
    }
  }
});

export default vibrantLightTheme;