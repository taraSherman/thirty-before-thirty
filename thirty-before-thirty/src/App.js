import React from "react";
import Login from "./Component/Login";
import styled from "styled-components";

const WrapperDiv = styled.div`
  font-family: sans-sarif;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <WrapperDiv>
      <Login></Login>
    </WrapperDiv>
  );
}

export default App;
