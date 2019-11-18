import React from "react";
import Login from "./Component/Login";
import Header from "./Component/Header"
import styled from "styled-components";

const WrapperDiv = styled.div`
  font-family: sans-sarif;
  
`;

const MainDiv = styled.div`text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #F7F9FB;
`;

function App() {
  return (
    <WrapperDiv>
      <Header></Header>
      <MainDiv>
        {/* Routes Here */}
        <Login></Login>
      </MainDiv>
    </WrapperDiv>
  );
}

export default App;
