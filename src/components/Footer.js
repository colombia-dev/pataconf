import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledFooter = styled.footer`
  background: #58220f;
  height: 180.66px;
  display: flex;
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  font-size: 0.85714286em;
  justify-content: space-between;
`

const StyledDivSocial = styled.div`
  height: 55px;
  padding-top: 60px;
  padding-right: 5vw;
`

const StyledPCoyrightI = styled.p`
  height: 55px;
  padding-top: 60px;
  padding-left: 5vw;
`

const StyledPSocial = styled.p`
  margin-left: 25px;
  margin-top: auto;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      dataJson {
        copyrightImage {
          name
          src {
            childImageSharp {
              fixed(width: 39, height: 39) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        copyright
        social {
          twitter
        }
      }
    }
  `)
  const { copyright, social, copyrightImage } = data.dataJson
  return (
    <StyledFooter>
      <StyledPCoyrightI>
        <Img fixed={copyrightImage.src.childImageSharp.fixed} />
        <p>{copyright}</p>
      </StyledPCoyrightI>
      <StyledDivSocial>
        <StyledPSocial>{social.twitter}</StyledPSocial>
      </StyledDivSocial>
    </StyledFooter>
  )
}

export default Footer
