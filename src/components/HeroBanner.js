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
  height: calc(100vh - 14em);
`
const ParticlesContainer = styled('div')`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  background: rgba(58, 45, 253, 0.61);
  div, canvas {
    height: 100vh;
  }
`

const HeroInfo = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: row-reverse;
  margin: 0 5vw;
  width: 75vw;
  @media (max-width: 550px) {
    top: 40%;
    flex-direction: column;
    align-items: center;
    font-size: 0.8em;
    transform: translate(-54%, -40%);
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
      <ParticlesContainer>
        <Particles params={ PARTICLES_PARAMS } />
      </ParticlesContainer>
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
