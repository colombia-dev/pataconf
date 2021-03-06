import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const NavContainer = styled.div`
  position: absolute;
  padding: 1.85714286em 0;
  z-index: 99;
  width: 100%;
  display: flex;
  justify-content: center;
`
const ExtendedMenu = styled.div`
    width: 90%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    @media (max-width: 750px) {
      display: none;
    }
`
const ExtendedNavLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  position: relative;
  top: 6px;

`
const ExtendedCallToActions = styled.div`
  font-weight: bold;
  top: 6px;
  display: flex;
  justify-content: flex-end;
`
const ExtendedLogo = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
  @media (max-width: 1010px) {
    display: none;
  }

`
const StyledImg = styled.img`
  max-height: 1.85714286em;
  position: relative;
  top: 4px;
  vertical-align: middle;
`
const ExtendedNavLink = styled.a`
  font-size: 15px;
  color: #ffd92d;
  font-weight: 700;
  margin-right: 1.23809524em;
  text-decoration: none;
  :hover {
    color: white; 
  }
  
  :last-child {
    margin-right: 0;
  }
`
const ExtendedCallToAction= styled.a`
  background: #fed92e;
  padding: 0.30952381em 1.85714286em;
  transition: 0.1s linear;
  -webkit-transition: 0.1s linear;
  -moz-transition: 0.1s linear;
  border-radius: 6px;
  border: 1px solid #252525;
  line-height: 1.85714286em;
    
  font-size: 15px;
  color: black;
  font-weight: 700;
  margin-right: 1.23809524em;
  text-decoration: none;
  :hover {
    color: gray; 
    border-color: gray;
    background-color: #fef042;
  }
  :last-child {
    margin-right: 0;
  }
`
const HamburgerMenu = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    width: calc(100% - 15vw);
    margin: 0 5vw;
    display: flex;
    justify-content: flex-start;
    @media (min-width: 750px) {
      display: none;
    }
`

// Pure CSS Hamburger Menu Adapted from: https://codepen.io/erikterwan/pen/EVzeRP
const MenuToggle = styled.div`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
`
const ToggleInput = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0;
  z-index: 2;
  
  -webkit-touch-callout: none;
`
const Hamburger = styled.span`
 display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
              
  :first-child {
    transform-origin: 0 0;
  }
  
  :nth-last-child(2) {
   transform-origin: 0 100%;
  }
  
  ${ToggleInput}:checked ~ & {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  
  ${ToggleInput}:checked ~ &:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  
  ${ToggleInput}:checked ~ &:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
`
const HamburgerMenuItems = styled.ul`
  position: absolute;
  width: 300px;
  max-width: 100vw;
  margin: -100px 0 0 -50px;
  padding: 125px 50px 50px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  
  transform-origin: 0 0;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  
  ${MenuToggle} ${ToggleInput}:checked ~ & {
    transform: none;
  }
   
  & a {
    text-decoration: none;
  }
`
const HamburgerMenuItem = styled.li`
  padding: 10px 0;
  font-size: 15px;
  color: black;
  font-weight: 700;
  margin-right: 1.23809524em;
  text-decoration: none;
  :hover {
    color: gray; 
  }
`
const HamburgerCallToAction = styled.li`
  background: #fed92e;
  padding: 10px 0;
  transition: 0.1s linear;
  -webkit-transition: 0.1s linear;
  -moz-transition: 0.1s linear;
  border-radius: 6px;
  border: 1px solid #252525;
  line-height: 1.85714286em;
    
  font-size: 15px;
  color: black;
  font-weight: 700;
  margin: 10px 50px 0 0;
  text-decoration: none;
  text-align: center;
  :hover {
    color: gray; 
    border-color: gray;
    background-color: #fef042;
  }
  
  &.first {
    margin-top: 50px;
  }
`

const NavBar = () => {
  const scheduleData = useStaticQuery(graphql`
    query navBarLinks {
      dataJson {
        conferenceTicketsURL
        conferenceCFPURL
        callForProposalIsOpen
        ticketSaleIsOpen
        scheduleIsLive
      }
    }
  `)

  const {
    conferenceTicketsURL,
    conferenceCFPURL,
    callForProposalIsOpen,
    ticketSaleIsOpen,
    scheduleIsLive
  } = scheduleData.dataJson

  return (
    <NavContainer>
      <ExtendedLogo>
        <StyledImg src="logo-dark.png" />
      </ExtendedLogo>
      <ExtendedMenu>
        <ExtendedNavLinks>
          <ExtendedNavLink href="#home">Home</ExtendedNavLink>
          { scheduleIsLive && <ExtendedNavLink href="#schedule">Agenda</ExtendedNavLink> }
          <ExtendedNavLink href="#lugar">Lugar</ExtendedNavLink>
        </ExtendedNavLinks>
        <ExtendedCallToActions>
          {ticketSaleIsOpen && <ExtendedCallToAction target="_blank" href={conferenceTicketsURL} rel="noopener noreferrer">Reclama tu Entrada</ExtendedCallToAction>}
          {callForProposalIsOpen && <ExtendedCallToAction target="_blank" href={conferenceCFPURL} rel="noopener noreferrer">Envía tu Charla</ExtendedCallToAction>}
        </ExtendedCallToActions>
    </ExtendedMenu>

      <HamburgerMenu>
        <MenuToggle>
          <ToggleInput type="checkbox" />

          <Hamburger/>
          <Hamburger/>
          <Hamburger/>

          <HamburgerMenuItems>
            <a href="#home"><HamburgerMenuItem>Home</HamburgerMenuItem></a>
            { scheduleIsLive && <a href="#schedule"><HamburgerMenuItem>Agenda</HamburgerMenuItem></a> }
            <a href="#lugar"><HamburgerMenuItem>Lugar</HamburgerMenuItem></a>
            {
              ticketSaleIsOpen &&
              <a target="_blank" href={conferenceTicketsURL} rel="noopener noreferrer">
                <HamburgerCallToAction className="first">Reclama tu Entrada</HamburgerCallToAction>
              </a>
            }
            {
              callForProposalIsOpen &&
              <a target="_blank" href={conferenceCFPURL} rel="noopener noreferrer">
                <HamburgerCallToAction>Envía tu Charla</HamburgerCallToAction>
              </a>
            }
          </HamburgerMenuItems>
        </MenuToggle>
      </HamburgerMenu>
    </NavContainer>
  )
}

export default NavBar
