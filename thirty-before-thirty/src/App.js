import React from "react";
import { Route, Link } from 'react-router-dom';
import Login from './Component/Login'
import Header from './Component/Header'
import styled from "styled-components";
import Register from './Component/Register';


const WrapperDiv = styled.div`
  font-family: sans-sarif;
`;

const MainDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f7f9fb;
`;


function App(props) {
  console.log('Application props', props);

  return (
    <WrapperDiv>

      <Header></Header>

      <MainDiv>
            <Link to ='/register' >Register Now</Link>
            <Route exact path='/register' render = { (props) => <Register {...props} />}/>
            <Route exact path='/' render= {() => <Login />}/>
        

      </MainDiv>
      <footer>Footer Here 2019</footer>
    </WrapperDiv>
  );
}

export default App;