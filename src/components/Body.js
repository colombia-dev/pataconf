import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Lead } from "./Lead"
import { Section } from "./Section"

const About = styled(Section)`
  display: flex;
  justify-content: space-around;
  padding: 7em 0;
  @media (max-width: 1000px) {
    flex-direction: column;
    font-size: 0.8em;
  }
`

const StyledDivBody = styled.div`
  flex-grow: 2;
  padding: 0 75px;
`

const StyledDivBodyDate = styled.div`
  flex-grow: 1;
  padding: 0 75px 0 0;
  @media (max-width: 1000px) {
    padding: 75px 75px 0;
  }
`

const Body = () => {
  const data = useStaticQuery(graphql`
    query BodyQuery {
      dataJson {
        conferenceSiteBody {
          title
          paragraph
        }
        conferenceSiteName
        conferenceSiteAddress
        conferenceCity
        conferenceCountry
        conferenceDates {
          date
          start
          end
        }
      }
    }
  `)

  const {
    conferenceSiteBody,
    conferenceSiteName,
    conferenceSiteAddress,
    conferenceCity,
    conferenceCountry,
    conferenceDates,
  } = data.dataJson
  return (
    <About id="about">
      <StyledDivBody>
        <h2>{conferenceSiteBody.title}</h2>
        {conferenceSiteBody.paragraph.map(p => (
          <Lead>{p}</Lead>
        ))}
      </StyledDivBody>

        <StyledDivBodyDate>
          <h4>Fecha:</h4>
          {conferenceDates.map(({ date, start, end }) => (
            <h5>{date} desde las {start} hasta las {end}</h5>
          ))}

          <h4>Lugar:</h4>
          <p>{conferenceSiteName}</p>
          <p>{conferenceSiteAddress}</p>
          <p>{conferenceCity} {conferenceCountry}</p>
        </StyledDivBodyDate>
    </About>
  )
}

export default Body
