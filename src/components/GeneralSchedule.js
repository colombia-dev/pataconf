import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getGeneralScheduleData = ({ node }) => {
  const { name, date, time } = node

  return (
    <div key={name}>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
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
    }
  `)

  return <>{allSchedule(data)}</>
}

export default GeneralSchedule
