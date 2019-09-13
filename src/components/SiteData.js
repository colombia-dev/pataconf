import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getSiteData = ({ node }) => {
  const {
    conferenceName,
    conferenceDates,
    conferenceSiteName,
    conferenceSiteAddress,
    conferenceSiteMapURL,
    conferenceCity,
    conferenceCountry,
    conferenceTicketsURL,
    conferenceCFPURL,
    codeOfConductURL,
    sponsorshipLevels,
    copyright,
    social,
  } = node

  return (
    <div>
      <h4>{conferenceName}</h4>
      <p>
        {conferenceDates.map(({ date, end, start }) => (
          <>
            <p>{date}</p>
            <p>{end}</p>
            <p>{start}</p>
          </>
        ))}
      </p>
      <p>{conferenceSiteName}</p>
      <p>{conferenceSiteAddress}</p>
      <p>{conferenceCity}</p>
      <p>{conferenceCountry}</p>
      <p>{conferenceTicketsURL}</p>
      <p>{conferenceCFPURL}</p>
      <p>{codeOfConductURL}</p>
      <p>
        {sponsorshipLevels.map(level => (
          <>
            <p>{level}</p>
          </>
        ))}
      </p>
      <p>{copyright}</p>
      <p>{social.twitter}</p>
    </div>
  )
}

const allSiteData = ({ allDataJson }) => {
  return allDataJson.edges.map(getSiteData)
}

const SiteData = () => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      allDataJson {
        edges {
          node {
            conferenceName
            conferenceDates {
              date
              end
              start
            }
            conferenceSiteName
            conferenceSiteAddress
            conferenceCity
            conferenceCountry
            conferenceTicketsURL
            conferenceCFPURL
            codeOfConductURL
            sponsorshipLevels
            copyright
            social {
              twitter
            }
          }
        }
      }
    }
  `)
  return <>{allSiteData(data)}</>
}

export default SiteData
