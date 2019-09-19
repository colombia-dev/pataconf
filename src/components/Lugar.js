import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Lead } from "./Lead"
import styled from "styled-components"
import { Section } from "./Section"

const LocationIntro = styled.div`
  text-align: center;
  padding-top: 7.42857143em;
  padding-bottom: 7.42857143em;
`
const LocationDetail = styled.div`
  display: flex;
  justify-content: space-around;
`
const Map = styled.img`
  width: 50%;
  max-width: 500px;
  min-width: 320px;
  max-height: 500px;
  object-fit: contain;
  padding-left: 45px;
  padding-right: 15px;
`

const Address = styled.div`
  padding-left: 15px;
  width: 40%;
  margin-top: 1.85714286em;
`

const Lugar = () => {
  const data = useStaticQuery(graphql`
    query LugarQuery {
      dataJson {
        conferenceSiteAddress
        conferenceSiteName
        conferenceCity
        conferenceCountry
        conferenceDates {
          date
          start
          end
        }
        conferenceSiteMapURL
      }
    }
  `)

  const {
    conferenceSiteAddress,
    conferenceSiteName,
    conferenceCity,
    conferenceCountry,
    conferenceDates,
    conferenceSiteMapURL,
  } = data.dataJson
  return (
    <Section secondary id="lugar">
      <LocationIntro>
        <h2>El Lugar</h2>
        <Lead>
          Ruta N es el lugar perfecto para compartir y llevar acabo este evento
        </Lead>
      </LocationIntro>

      <LocationDetail>
        <Map src={conferenceSiteMapURL} />

        <Address>
          <h3>
            {conferenceSiteName}, {conferenceCity} {conferenceCountry}
            <br />
            {conferenceSiteAddress}
          </h3>

          {conferenceDates.map(({ date, end, start }) => (
            <Lead>
              Estamos desde {start} {end}
            </Lead>
          ))}
        </Address>
      </LocationDetail>
    </Section>
  )
}

export default Lugar
