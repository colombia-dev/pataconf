import React from "react";
import styled from "styled-components";

const StyledNavContainer = styled.div`
width: 1100px;
display: flex;
padding-left: 100px;

`;

const StyledBar = styled.div`
width: 200px;
display: flex;
justify-content: space-around;
font-weight: bold;
`;

const StyledDivImageBar = styled.div`
width: 100px;
`;



class NavBar extends React.Component {


  render(){
    return(
      <StyledNavContainer >
        <StyledBar>
          <a href="#home">Home</a>
          <a href="#schedules">Agenda</a>
          <a href="#lugar">Lugar</a>
        </StyledBar>
        <StyledDivImageBar>
          <img className="logo logo-dark" alt="logo" src="img/logo-dark.png"/>
          <img className="logo logo-light" alt="logo" src="img/logo-light.png"/>
        </StyledDivImageBar>


      </StyledNavContainer>
        );
        }

}

export default NavBar;









