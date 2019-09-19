import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Lead } from "./Lead"

const StyledDivPrincipal = styled.div`
  width: 100vw;
  padding-top: 7.42857143em;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-around;
`

const StyledDivBody = styled.div`
  width: 60%;
  padding-left: 15px;
  padding-right: 15px;
`

const StyledDivBodyDate = styled.div`    
  width: 25%;
}`

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
    <StyledDivPrincipal>
      <StyledDivBody>
        <h2>{conferenceSiteBody.title}</h2>
        {conferenceSiteBody.paragraph.map(p => (
          <Lead>{p}</Lead>
        ))}
      </StyledDivBody>

      {conferenceDates.map(({ date, start, end }) => (
        <StyledDivBodyDate>
          <h5>Fecha</h5>
          <p>{date}</p>
          <h5>Hora</h5>
          <p>
            {" "}
            Sabado: {start} {end}
          </p>
          <h5>Lugar</h5>
          <p>{conferenceSiteName}</p>
          <p>{conferenceSiteAddress}</p>
          <p>
            {conferenceCity} {conferenceCountry}{" "}
          </p>
        </StyledDivBodyDate>
      ))}
    </StyledDivPrincipal>
  )
}

export default Body
