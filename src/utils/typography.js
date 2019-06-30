import Typography from "typography"
import Kirkham from "typography-theme-kirkham"

Kirkham.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1, h2, h3": {
      "text-transform": "uppercase",
    },
    a: {
      color: "#B63467",
    },
    body: {
      'letter-spacing': '0.03rem'
    },
  }
}

delete Kirkham.googleFonts
Kirkham.bodyFontFamily = ['avenir', 'sans-serif']
Kirkham.headerFontFamily = ['avenir', 'sans-serif']
Kirkham.baseFontSize = '16px'
Kirkham.bodyColor = "hsla(0,0%,0%,0.6)"
const typography = new Typography(Kirkham)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
