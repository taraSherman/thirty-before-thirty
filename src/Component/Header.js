import React from "react";
import styled from "styled-components";
import { Button } from "./Login";

const HeaderDiv = styled.div`
  padding: 25px;
  color: #31708e;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
`;

function Header() {
  return (
    <HeaderDiv>
      <h1>30 BEFORE 30</h1>
      <Button>Logout</Button>
    </HeaderDiv>
  );
}

export default Header;
