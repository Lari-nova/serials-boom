import React from "react";
import styled from "styled-components";

const MenuPanel = () => {
  return(
    <MainContainer>
      <Container>
        <Container>
          LOGO
        </Container>
        <input/>
      </Container>
      <Navigation>
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a className="icon">
          <i className="fa fa-bars"></i>
        </a>
      </Navigation>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  margin: 0;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: inline-block;
`

const Navigation = styled.div`
  display: inline-block;
`

export default MenuPanel;