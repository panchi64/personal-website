# Website Requirements

## UI

### Menu

If found in the menu it must have:

- A max width
- A max height
- Doesn't fill up the complete menu area = Needs a designated size
- Correctly and dynamically adjust to a given screen size

### React Components

#### Raw Components

Must have:

- Dynamically changeable dark and light mode variant depending on the current theme the website is in
- Mac colors already designated

#### Callouts

Must have:

- Mac color scheme
- Dark and light variants
- Dynamically adjustable title and description
- Color dynamically adjusting to a given severity/success rate
- Max width
- Max height
- Show up in an appropriate screen location (not be a popup)
- Dismissible
- Fade out after a small amount of time

#### Buttons

Must have:

- Mac color scheme
- Dark and light variants
- Dynamically adjustable labels
- If it has custom animations or effects
  - Must be smooth
- If it hyperlinks
  - Link has to open in a new tab

### Mobile

Requirements for mobile:

- Stupidly simple to use
- Everything must be accessible with one hand
- Everything must be accessible with one or two taps
- Playable media can either be contained to its current spot, popped out as a PnP, or be fullscreen
- Images must render in the minimum quality possible but still look high resolution
- Images must be zoomable
- If an image goes fullscreen it must be fetched at native resolution and quality

## UX

- Clear navigation
- Fast as possible website loading speed (above all else)
- Website must be responsive and display the expected user interface on different screen sizes
- Accessibility is expected on all parts of the website (follow Web Content Accessibility Guidelines)
- Layout must be consistent
  - No weird UI inconsistencies even if it looks cool
  - Any inconsistency must be justified by means of necessity
    - ie. If it is truly necessary then maybe tweak the UI to somewhat match the current UI for familiarity
- No weird typography
  - No weird font sizes
  - No weird font weights
  - No weird font families
  - No weird font colors
- There must be an intuitive visual heirarchy to all UI components
- Forms must be straight to the point and contain all the information required to be filled in one single page
  - No multi-page forms
- All call-to-action buttons must have a reason for the attention they are trying to grab
- Cross-browser compatibility
  - Must work on all major browsers
    - Chromium
    - Firefox
    - Safari
  - Must work on all major mobile browsers
    - Chromium
    - Firefox
    - Safari
- Errors must be handled gracefully and not notify the user unless the error stems from a user's actions
- Any personal links must not lead to unsafe information
  - ie. No location data, no personal communication channels, no personal photos, etc.
- SEO Friendly
- Page Speed Optimization:
  - Continuously monitor and improve page loading times
