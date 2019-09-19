import React from "react"
import NavBar from "../components/Navbar"
import HeroBanner from "../components/HeroBanner"
import Schedule from "../components/Schedule"
import Footer from "../components/Footer"
import Sponsors from "../components/Sponsors"
import Lugar from "../components/Lugar"
import Body from "../components/Body"

class index extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeroBanner />
        <Schedule />
        <Body />
        <Lugar />
        <Sponsors />
        <Footer />
      </div>
    )
  }
}

export default index
