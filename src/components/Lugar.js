import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledImg = styled.img`
  width: 50%;
  position: relative;
  min-height: 1px;
  padding-left: 45px;
  padding-right: 15px;
`

const StyledDiv = styled.div`
  padding-left: 15px;
  float: right;
  left: auto;
  width: 41.66666667%;
  margin-top: 1.85714286em;
`

const StyledH3 = styled.h3`
  font-size: 1.78571429em;
  line-height: 0.5em;
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #252525;
  font-weight: 300;
`
const StyledP = styled.p`
  font-weight: 400;
  color: #808080;
  font-size: 1.35714286em;
  line-height: 1.68421053em;
`

const StyledDivLugar = styled.div`
  text-align: center;
  padding-top: 7.42857143em;
  padding-bottom: 7.42857143em;
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #666666;
  font-weight: 400;
`

const StyledH2Lugar = styled.h2`
font-size: 2.35714286em;
    line-height: 1.36363636em;
    font-weight: 300;

}`

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
    <div>
      <StyledDivLugar>
        <StyledH2Lugar>El Lugar</StyledH2Lugar>
        <StyledP>
          Ruta N es el lugar perfecto para compartir y llevar acabo este evento
        </StyledP>
      </StyledDivLugar>
      <StyledImg src={conferenceSiteMapURL} />
      {conferenceDates.map(({ date, end, start }) => (
        <StyledDiv>
          <StyledH3>
            {conferenceSiteName}, {conferenceCity} {conferenceCountry}
          </StyledH3>
          <StyledH3>{conferenceSiteAddress}</StyledH3>

          <StyledP>
            Estamos desde
            {start} {end}
          </StyledP>
        </StyledDiv>
      ))}
    </div>
  )
}

export default Lugar
