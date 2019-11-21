import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from "./Component/Login";
import Header from "./Component/Header"
import styled from "styled-components";
import Register from './Component/Register';


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

function App(props) {
  console.log('Application props', props);
  return (

    <WrapperDiv>

      <Header></Header>

      <MainDiv>

        <BrowserRouter>
            <Link to ='/register' >Register Now</Link>
            <Route exact path='/register' render = { (props) => <Register {...props} />}/>
            <Route exact path='/' render= {() => <Login />}/>
        </BrowserRouter>
    
      </MainDiv>
    </WrapperDiv>

  );
}

export default App;
