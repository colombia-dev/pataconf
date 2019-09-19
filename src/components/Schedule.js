import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyleDivPrincipal = styled.div`
  margin: 60px;
  width: 1200px;
`

const StyledH4 = styled.h4`
  text-align: center;
  margin-bottom: 0.78787878787879em;
  font-size: 1.35714286em;
  line-height: 1.36363636em;
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #252525;
  font-weight: 300;
`
const StyledH2 = styled.h2`
  text-align: center;
  margin-bottom: 0.78787878787879em;
  font-size: 2.35714286em;
  line-height: 1.36363636em;
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #252525;
  font-weight: 300;
`

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #ececec;
  padding: 0.92857143em;
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

const Schedule = () => {
  const scheduleData = useStaticQuery(graphql`
    query allGeneralSchedule {
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

  const generalschedule = scheduleData.allGeneralScheduleJson.edges.map(
    g => g.node
  )
  const speakers = scheduleData.allSpeakersDataJson.edges.map(s => s.node)

  const tracks = [
    ...new Set(speakers.map(s => s.talks.map(t => t.track)).flat()),
  ].sort()

  const gsTimes = generalschedule.map(gs => gs.time)
  const spTime = [
    ...new Set(speakers.map(s => s.talks.map(t => t.time)).flat()),
  ]
  const allTimes = gsTimes.concat(spTime).sort()
  const allTalks = speakers.reduce(
    (accTalks, speaker) => [
      ...accTalks,
      ...speaker.talks.map(talk => ({
        ...talk,
        name: speaker.name,
        twitter: speaker.twitter,
      })),
    ],
    []
  )

  const isGeneralSchedule = t =>
    generalschedule.filter(gs => gs.time === t).length > 0

  const generalScheduleForTime = time => (
    <td colSpan={tracks.length}>
      <StyledH4>{generalschedule.find(gs => gs.time === time).name}</StyledH4>
    </td>
  )

  const talkForTrackAndTime = (track, time) => {
    const talk = allTalks.find(t => t.time === time && t.track === track)
    return talk ? (
      <td>
        <h5>{talk.title}</h5>
        <p>{talk.description}</p>
        <p>{talk.name}</p>
        <a href={`https://twitter.com/${talk.twitter}`}>{talk.twitter}</a>
      </td>
    ) : (
      <td></td>
    )
  }

  return (
    <StyleDivPrincipal>
      <StyledH2>Agenda</StyledH2>
      <StyledTable>
        <thead>
          <tr>
            <StyledThHora>Hora</StyledThHora>
            {tracks.map(t => (
              <th>Track {t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allTimes.map(time => (
            <tr>
              <StyledTdSchedule>{time}</StyledTdSchedule>

              {isGeneralSchedule(time)
                ? generalScheduleForTime(time)
                : tracks.map(track => talkForTrackAndTime(track, time))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyleDivPrincipal>
  )
}

export default Schedule
