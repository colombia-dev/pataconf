import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Lead } from "./Lead"

const StyledDiv = styled.div`
  text-align: center;
`

const StyledDivApoya = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`

const SponsorLevel = styled.div`
  padding: 3.71428571em;
`

const SponsorList = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 3.71428571em;
  align-items: flex-start;
`

const SponsorImage = styled.div`
  display: inline-flex;
  vertical-align: middle;
`

const Sponsors = () => {
  const sponsorsData = useStaticQuery(graphql`
    query SponsorsQuery {
      dataJson {
        sponsorshipLevels
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

  const { sponsorshipLevels } = sponsorsData.dataJson
  const sponsors = sponsorsData.allSponsorsDataJson.edges.map(e => e.node)
  return (
    <StyledDiv>
      <StyledDivApoya>
        <h2>Apoyan</h2>
        <Lead>
          Adoptamos el código de conducta de{" "}
          <a href="https://github.com/colombia-dev/codigo-de-conducta">
            Colombia.dev
          </a>
        </Lead>
      </StyledDivApoya>

      {sponsorshipLevels.map(level => (
        <SponsorLevel>
          <h3>{level}</h3>
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
    </StyledDiv>
  )
}

export default Sponsors
