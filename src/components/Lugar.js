import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Lead } from "./Lead"
import styled from "styled-components"
import { Section } from "./Section"


const AddressSection = styled(Section)`
  padding: 7em 0;
  @media (max-width: 950px) {
    font-size: 0.8em;
  }
`

const LocationIntro = styled.div`
  text-align: center;
  padding: 0 2em 3em;
`
const LocationDetail = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 2em;
  @media (max-width: 560px) {
    flex-direction: column-reverse;
    align-items: center;
    font-size: 0.8em;
  }
`
const Map = styled.img`
  width: 50%;
  max-width: 500px;
  max-height: 500px;
  object-fit: contain;
  @media (max-width: 560px) {
    width: 90%;
  }
`

const Address = styled.div`
  padding-left: 15px;
  width: 40%;
  margin-top: 1.85714286em;
    @media (max-width: 560px) {
    width: 90%;
    padding: 15px;
    margin: 0.5em 0;
    font-size: 1.1em;
  }
`

const Lugar = () => {
  const data = useStaticQuery(graphql`
    query LugarQuery {
      dataJson {
        conferenceSiteAddress
        conferenceSiteName
        conferenceCity
        conferenceCountry
        conferenceSiteMapURL
        conferenceHowToGetLabel
        conferenceHowToGetLink
      }
    }
  `)

  const {
    conferenceSiteAddress,
    conferenceSiteName,
    conferenceCity,
    conferenceCountry,
    conferenceSiteMapURL,
    conferenceHowToGetLabel,
    conferenceHowToGetLink,
  } = data.dataJson
  return (
    <AddressSection secondary id="lugar">
      <LocationIntro>
        <h2>El Lugar</h2>
        <Lead>
          Ruta N es el lugar perfecto para compartir y llevar acabo este evento
        </Lead>
      </LocationIntro>

      <LocationDetail>
        <Map src={conferenceSiteMapURL} />

        <Address>
          <h4>
            {conferenceSiteName}, {conferenceCity} {conferenceCountry}
            <br />
            {conferenceSiteAddress}
          </h4>
          <a href={conferenceHowToGetLink} target="_blank" rel="noopener noreferrer">
            {conferenceHowToGetLabel}
          </a>
        </Address>
      </LocationDetail>
    </AddressSection>
  )
}

export default Lugar
