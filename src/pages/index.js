import React from "react"
import NavBar from "../components/Navbar"
import HeroBanner from "../components/HeroBanner"
import GeneralSchedule from "../components/GeneralSchedule"
import Speakers from "../components/Speakers"
import Footer from "../components/Footer"
import Sponsors from "../components/Sponsors"
import Lugar from "../components/Lugar"

class index extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeroBanner />
        <GeneralSchedule />
        <Speakers />
        <Lugar />
        <Sponsors />
        <Footer />
      </div>
    )
  }
}

export default index
