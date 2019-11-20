import React from "react";
import "./App.css";

import LoginForm from './components/loginForm';


function App(props) {
  console.log('Application props', props)
 return (
   <LoginForm />
 )
}


export default App;
