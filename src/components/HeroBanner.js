import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Lead } from "./Lead"
import { Section } from "./Section"

const HeroSection = styled(Section)`

`

const HeroInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 5vw;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    font-size: 0.8em;
  }
`
const ConfInfo = styled.div`
  flex-grow: 1;
  color: #fff;
`
const ConfLogo = styled.div`

`
const Img = styled.img`
  width: 40vw;
  height: 41.56vw;
    @media (max-width: 550px) {
  width: 80vw;
  height: 83.02vw;

  }
`

const BannerTitle = styled.h1`
  color: white;
  margin: 0 0 26px;
  font-style: normal;
`

const BannerLead = styled(Lead)`
  color: white;
  font-style: normal;
`

const getHeroBannerData = data => {
  const { title, description } = data.heroBannerJson

  return (
    <>
      <BannerTitle>{title}</BannerTitle>
      <BannerLead>{description}</BannerLead>
    </>
  )
}

const HeroBanner = () => {
  const data = useStaticQuery(graphql`
    query BannerQuery {
      heroBannerJson {
        title
        description
      }
    }
  `)

  return (
    <HeroSection bgImage={"conference.png"}>
      <HeroInfo>
        <ConfLogo>
          <Img src="pataconf.png" />
        </ConfLogo>
        <ConfInfo>{getHeroBannerData(data)}</ConfInfo>
      </HeroInfo>
    </HeroSection>
  )
}

export default HeroBanner
