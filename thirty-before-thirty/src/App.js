import React from "react";
import Login from "./Component/Login";
import styled from "styled-components";

const wrapperDiv = styled.div`
  font-family: sans-sarif;
  text-align: center;
`;

function App() {
  return (
    <div>
      This is an app!<Login></Login>
    </div>
  );
}

export default App;
