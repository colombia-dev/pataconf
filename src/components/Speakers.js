import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getSpeakers = ({ node }) => {
  const { name, twitter, talks } = node

  return (
    <div>
      <h4>{name}</h4>
      <h4>{twitter}</h4>
      {talks.map(({ title, description, track, time }) => (
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{time}</p>
          <h3>{track}</h3>
        </>
      ))}
    </div>
  )
}

const allSpeakers = ({ allSpeakersDataJson }) => {
  return allSpeakersDataJson.edges.map(getSpeakers)
}
const Speakers = () => {
  const data = useStaticQuery(graphql`
    query SpeakersQuery {
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
  return <>{allSpeakers(data)}</>
}

// const Speakers = (<div>Nothing here yet</div>)

export default Speakers
