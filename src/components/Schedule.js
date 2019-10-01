import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { Section } from "./Section"

const Container = styled(Section)`
  padding: 7em 0;
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
  margin: 0 60px;
  border: 1px solid #ececec;
  padding: 0.92857143em;
  @media (max-width: 800px) {
    font-size: 0.7em;
  }
  @media (max-width: 500px) {
    margin: 0;
  }
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

const StyledTrSchedule = styled.tr`
  border-top: 1px solid #ececec;
`

const TdTrack = styled.td`
  padding: 10px;
  :hover {
    background-color: aliceblue;
  }
`

const TalkDescription = styled.p`
  font-weight: 300;
  line-height: 1.5em;
  color: gray;
  padding: 10px 0;
`
const TwitterLink = styled.a`
  color: #37dbff;
  text-decoration: none;
  font-style: italic;
`

const Schedule = () => {
  const scheduleData = useStaticQuery(graphql`
    query allGeneralSchedule {
      dataJson {
        scheduleIsLive
      }
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

  const scheduleIsLive = scheduleData.dataJson.scheduleIsLive

  if(!scheduleIsLive) {
    return null
  }

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
    <TdTrack colSpan={tracks.length}>
      <StyledH4>{generalschedule.find(gs => gs.time === time).name}</StyledH4>
    </TdTrack>
  )

  const talkForTrackAndTime = (track, time) => {
    const talk = allTalks.find(t => t.time === time && t.track === track)
    return talk ? (
      <TdTrack>
        <h5>{talk.title}</h5>
        <TalkDescription>{talk.description}</TalkDescription>
        <span>
          {talk.name}
          {" "}
          <TwitterLink href={`https://twitter.com/${talk.twitter}`}>{talk.twitter}</TwitterLink>
        </span>
      </TdTrack>
    ) : (
      <td></td>
    )
  }

  return (
    <Container id="schedule" secondary>
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
            <StyledTrSchedule>
              <StyledTdSchedule>{time}</StyledTdSchedule>

              {isGeneralSchedule(time)
                ? generalScheduleForTime(time)
                : tracks.map(track => talkForTrackAndTime(track, time))}
            </StyledTrSchedule>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  )
}

export default Schedule
