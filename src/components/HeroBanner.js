import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Particles from 'react-particles-js';

import { Lead } from "./Lead"
import { Section } from "./Section"

const HeroSection = styled(Section)`
  padding-top: 7em;
  padding-bottom: 7em;
  position: relative;
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : ''};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 14em);
  display: flex;
  align-items: center;
`
const ParticlesContainer = styled('div')`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(58, 45, 253, 0.61);
  div, canvas {
    height: 100vh;
  }
`

const HeroInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: 0 5%;
  width: 90%;
  z-index: 2;
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
  width: 25vw;
  @media (max-width: 550px) {
    width: 80vw;
    height: 83.02vw;
  }
`

const BannerTitle = styled.h1`
  color: #fdd92d;
  font-style: normal;
  font-weight: 700;
  margin: 0 0 26px;
  @media (max-width: 550px) {
    font-size: 30px;
  }
`

const BannerLead = styled(Lead)`
  background-color: #3a3fe4d6;
  color: #ffffff;
  font-style: normal;
  padding: 10px;
`

const PARTICLES_PARAMS = {
  particles: {
    number: {
      value: 572,
      density: {
        enable: true,
        value_area: 3126.65351868777,
      },
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

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
      <ParticlesContainer>
        <Particles params={ PARTICLES_PARAMS } />
      </ParticlesContainer>
    </HeroSection>
  )
}

export default HeroBanner
