import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledH4 = styled.h4`
  text-align: center;
  margin-bottom: 0.78787878787879em;
  font-size: 2.35714286em;
  line-height: 1.36363636em;
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #252525;
  font-weight: 300;
`
const StyledDivTable = styled.div`
  width: 1170px;
  float: inline-end;
  color: #252525;
`

const StyledTable = styled.table`
  width: 100%;
`

const StyledThHora = styled.th`
  padding: 0.92857143em;
  text-align: left;
  width: 62px;
`

const StyledTdSchedule = styled.td`
  color: #666666;
  font-weight: 400;
  font-size: 87.5%;
`

const getGeneralScheduleData = ({ node }) => {
  const { name, date, time } = node

  return (
    <div key={name}>
      <tr>
        <StyledTdSchedule>
          <p>{time}</p>
        </StyledTdSchedule>

        <td>
          <h4>{name}</h4>
        </td>
      </tr>
    </div>
  )
}

const allSchedule = ({ allGeneralScheduleJson }) => {
  return allGeneralScheduleJson.edges.map(getGeneralScheduleData)
}

const GeneralSchedule = () => {
  const data = useStaticQuery(graphql`
    query ScheduleQuery {
      allGeneralScheduleJson {
        edges {
          node {
            name
            date
            time
          }
        }
      }
      allSpeakersDataJson {
        edges {
          node {
            name
            talks {
              description
              time
              title
              track
            }
            twitter
          }
        }
      }
    }
  `)

  return (
    <div>
      <StyledH2>Agenda</StyledH2>
      <StyledDivTable>
        <StyledTable>
          <thead>
            <tr>
              <StyledThHora>Hora</StyledThHora>
              <th>track 1</th>
              <th>track 2</th>
            </tr>
          </thead>
          <tbody>
            <div id="1"> {allSchedule(data)}</div>
          </tbody>
        </StyledTable>
      </StyledDivTable>
    </div>
  )
}

export default GeneralSchedule
