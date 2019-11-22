import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { withFormik ,Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import Register from './Register';

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background
  height: 250px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  width: 75px;
  height: 25px;
  padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 10px;
    color: white;

  ${props => (props.name === 'login' ? `background: #31708E;` : null)}
  ${props => (props.name === 'register' ? `background: #8FC1E3 ;` : null)}


`;

function Login() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(...LoginUsers) => {
        console.log(LoginUsers, 'KAdeem');
      }}
      render={props => {
        return (
        <BrowserRouter >
          <Form>
            Please Login or Register
            <FormDiv>
              <Field type="text" name="username" placeholder="Username" />
              <Field type="password" name="password" placeholder="Password" />
              <Buttons>
                <Button type="submit" name='login'> Login</Button>
                  
                    <Link to ='/register' >Register Now</Link>
                    <Route exact path='/register' render = { (props) => <Register {...props} />}/>
                    <Route exact path='/' render= {() => <Login />}/>
                  
              </Buttons>
            </FormDiv>
          </Form>
          </BrowserRouter>
        );
      }}
    />
  );
}

export default withFormik({
  mapPropsToValues: currentValues => {
    return {
      username: currentValues.username || " ",
      password: currentValues.password || " "
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).required()
  }),
  handleSubmit: values => {
    console.log(values, 'ksdnksdn');
    axios
      .post("https://buildweek30before30.herokuapp.com/api", values)
      //if response is valid then log this..
      .then(response => {
        console.log(response);
      })
      //if response is invalid then log this..
      .catch(err => {
        console.log(err);
      });
  }
})(Login);
