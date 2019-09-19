import React from "react"
import { Reset } from "styled-reset"
import { createGlobalStyle } from "styled-components"

import HeroBanner from "../components/HeroBanner"
import Schedule from "../components/Schedule"
import Footer from "../components/Footer"
import Sponsors from "../components/Sponsors"
import Lugar from "../components/Lugar"
import Body from "../components/Body"

const GlobalStyle = createGlobalStyle`

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
    color: #252525;
    font-weight: 300;
    font-variant-ligatures: common-ligatures;
    margin-top: 0;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2.35714286em;
    line-height: 1.36363636em;
    margin-bottom: 0.78787878787879em;
  }
  
  h3 {
    margin-bottom: 1.04em;
    font-size: 1.78571429em;
    line-height: 1.5em;
  }
`

class index extends React.Component {
  render() {
    return (
      <>
        <Reset />
        <GlobalStyle />
        <div>
          <HeroBanner />
          <Schedule />
          <Body />
          <Lugar />
          <Sponsors />
          <Footer />
        </div>
      </>
    )
  }
}

export default index
