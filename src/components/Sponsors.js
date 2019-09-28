import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Lead } from "./Lead"
import { Section } from "./Section"

const StyledDivApoya = styled.div`
  text-align: center;
  padding: 0 15px;
`

const SponsorLevel = styled.div`
  padding: 3.71428571em;
  :last-child {
    padding-bottom: 0;
  }
`

const SponsorList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  }
`

const SponsorImage = styled.div`
  display: inline-flex;
  vertical-align: middle;
  @media (max-width: 550px) {
    padding-bottom: 5em;
  }
`

const Sponsors = () => {
  const sponsorsData = useStaticQuery(graphql`
    query SponsorsQuery {
      dataJson {
        sponsorshipLevels
        codeOfConductOrganization
        codeOfConductURL
      }
      allSponsorsDataJson {
        edges {
          node {
            level
            image {
              name
              src {
                childImageSharp {
                  fixed(height: 110) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { sponsorshipLevels, codeOfConductOrganization, codeOfConductURL } = sponsorsData.dataJson
  const sponsors = sponsorsData.allSponsorsDataJson.edges.map(e => e.node)
  return (
    <Section>
      <StyledDivApoya>
        <h2>Apoyan</h2>
        <Lead>
          Adoptamos el código de conducta de{" "}
          <a href={codeOfConductURL}>
            {codeOfConductOrganization}
          </a>
        </Lead>
      </StyledDivApoya>

      {sponsorshipLevels.map(level => (
        <SponsorLevel>
          {sponsorshipLevels.length > 1 ?
            <h3>{level}</h3>
            : null
          }
          <SponsorList key={level}>
            {sponsors
              .filter(sponsor => sponsor.level === level)
              .map(({ image }) => (
                <SponsorImage>
                  <Img
                    key={image.name}
                    fixed={image.src.childImageSharp.fixed}
                  />
                </SponsorImage>
              ))}
          </SponsorList>
        </SponsorLevel>
      ))}
    </Section>
  )
}

export default Sponsors
