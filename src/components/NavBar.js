import React from "react"
import styled from "styled-components"

const StyledNavContainer = styled.div`
  width: 1100px;
  display: flex;
  padding-left: 100px;
`

const StyledBar = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  position: relative;

  top: 6px;
`

const StyledDivImageBar = styled.div`
  width: 100px;
`

const StyledImg = styled.img`
  max-height: 1.85714286em;
  margin: 0;
  position: relative;
  top: 4px;
  vertical-align: middle;
  left: 41.66666667%;
`

const Styleda = styled.a`
  color: #ffd92d;
  font-weight: bold;
  font-size: 87.5%;
`

class NavBar extends React.Component {
  render() {
    return (
      <StyledNavContainer>
        <StyledBar>
          <Styleda href="#home">Home</Styleda>
          <Styleda href="#schedule">Agenda</Styleda>
          <Styleda href="#lugar">Lugar</Styleda>
        </StyledBar>
        <StyledDivImageBar>
          <StyledImg src="logo-dark.png" />
        </StyledDivImageBar>
      </StyledNavContainer>
    )
  }
}

export default NavBar
