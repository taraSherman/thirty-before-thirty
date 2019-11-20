import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
padding:25px;
  color: #31708E;
`;

function Header() {
  return (
    <HeaderDiv>
      <h1>30 before 30</h1>
    </HeaderDiv>
  );
}

export default Header;
