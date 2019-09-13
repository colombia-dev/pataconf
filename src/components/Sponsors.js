import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledDiv = styled.div`
  text-align: center;
`

const StyledDivApoya = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 87.5%;
`

const StyledH2 = styled.h2`
  margin-bottom: 0.78787878787879em;
      font-size: 2.35714286em;
    line-height: 1.36363636em;
    font-weight: 300;
    color: #252525;
    font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
}
`

const StyledDivSponsor = styled.div`
  padding-bottom: 3.71428571em;
`

const StyledDivImageSponsor = styled.div`
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
        <StyledH2>Apoyan</StyledH2>
        <p>
          Adoptamos el código de conducta de{" "}
          <a href="https://github.com/colombia-dev/codigo-de-conducta">
            {" "}
            Colombia.dev
          </a>
        </p>{" "}
      </StyledDivApoya>

      <StyledDivSponsor>
        {sponsorshipLevels.map(level => (
          <div key={level}>
            <h1>{level}</h1>

            <div>
              {sponsors
                .filter(sponsor => sponsor.level === level)
                .map(({ image }) => (
                  <StyledDivImageSponsor>
                    <Img
                      key={image.name}
                      fixed={image.src.childImageSharp.fixed}
                    />
                  </StyledDivImageSponsor>
                ))}
            </div>
          </div>
        ))}
      </StyledDivSponsor>
    </StyledDiv>
  )
}

export default Sponsors
