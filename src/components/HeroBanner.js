import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import styled from "styled-components"
import NavBar from "./NavBar"
import { Lead } from "./Lead"
import { Section } from "./Section"

const HeroInfo = styled.div`
  display: flex;
  margin: 0 5vw;
`
const ConfInfo = styled.div`
  flex-grow: 1;
  color: #fff;
  padding: 5vw;
  min-width: 40vw;
`
const ConfLogo = styled.div`
  flex-grow: 1;
  padding: 5vw;
`
const Img = styled.img`
  width: 410px;
  height: 426px;
`
const getHeroBannerData = data => {
  const { title, description } = data.heroBannerJson

  return (
    <>
      <h1>{title}</h1>
      <Lead>{description}</Lead>
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
    <Section bgImage={"conference.png"}>
      <NavBar />
      <HeroInfo>
        <ConfInfo>{getHeroBannerData(data)}</ConfInfo>
        <ConfLogo>
          <Img src="pataconf.png" />
        </ConfLogo>
      </HeroInfo>
    </Section>
  )
}

export default HeroBanner
