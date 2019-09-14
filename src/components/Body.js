import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledDivPrincipal = styled.div`
  width: 1363px;
  padding-top: 7.42857143em;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
`

const StyledDivBody = styled.div`
  width: 58.33333333%;
  padding-left: 15px;
  padding-right: 15px;
`

const StyledH2 = styled.h2`
  margin-bottom: 0.78787878787879em;
  font-size: 2.35714286em;
  line-height: 1.36363636em;
  color: #252525;
  font-weight: 300;
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
        <StyledH2>{conferenceSiteBody.title}</StyledH2>
        {conferenceSiteBody.paragraph.map(p => (
          <p>{p}</p>
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
