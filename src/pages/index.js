import React from "react"
import { Reset } from "styled-reset"
import styled, { createGlobalStyle } from "styled-components"
import 'array-flat-polyfill'

import HeroBanner from "../components/HeroBanner"
import Schedule from "../components/Schedule"
import Footer from "../components/Footer"
import Sponsors from "../components/Sponsors"
import Lugar from "../components/Lugar"
import Body from "../components/Body"
import NavBar from "../components/NavBar"
import SEO from "../components/SEO"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  
  body {
    font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
    color: #252525;
    font-weight: 300;
    font-variant-ligatures: common-ligatures;
    margin-top: 0;
    margin-bottom: 0;
    @media (max-width: 400px) {
      font-size: 0.8em;
    }
  }
  
  h1 {
    font-size: 3.14285714em;
    line-height: 1.31818182em;
    font-weight: 300;
    font-variant-ligatures: common-ligatures;
    margin-top: 0;
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
  
  h4 {
    margin-bottom: 10px;
    font-size: 1.35714286em;
    line-height: 1.68421053em;
  }
  
  h5 {
    font-size: 1em;
    font-weight: 600;
    line-height: 1.5em;
  }
  
  body {
    @media (max-width: 400px) {
      font-size: 0.7em;
    }
  }
`

const Sections = styled.div`

`

class index extends React.Component {
  render() {
    return (
      <>
        <Reset />
        <GlobalStyle />
        <SEO />
        <NavBar />
        <Sections>
          <HeroBanner />
          <Schedule />
          <Body />
          <Lugar />
          <Sponsors />
          <Footer />
        </Sections>
      </>
    )
  }
}

export default index
