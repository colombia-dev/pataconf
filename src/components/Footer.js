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

const Copyright = styled.p`
  height: 55px;
  padding-top: 60px;
  padding-left: 5vw;
`

const CopyrightTwitter = styled.p`
  height: 55px;
  padding-top: 60px;
  padding-right: 5vw;
`

const CopyrightImage = styled(Img)`
  display: inline-block;
`

const CopyrightHolder = styled.span`
  vertical-align: top;
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
      <Copyright>
        <CopyrightImage fixed={copyrightImage.src.childImageSharp.fixed} />
        <CopyrightHolder> © {copyright}</CopyrightHolder>
      </Copyright>
      <CopyrightTwitter>{social.twitter}</CopyrightTwitter>
    </StyledFooter>
  )
}

export default Footer
