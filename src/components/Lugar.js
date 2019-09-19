import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Lead } from "./Lead"
import styled from "styled-components"

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
  position: relative;
  min-height: 1px;
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
    <div id="lugar">
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
    </div>
  )
}

export default Lugar
