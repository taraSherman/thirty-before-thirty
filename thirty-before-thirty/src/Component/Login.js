import React from "react";
import styled from "styled-components";

import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
`;

function Login() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(...LoginUsers) => {
        console.log(LoginUsers);
      }}
      render={props => {
        return (
          <Form>
            Please Login or Register
            <FormDiv>
              <Field type="text" name="username" placeholder="Username" />
              <Field type="password" name="password" placeholder="Password" />
              <Buttons>
                <Button type="submit"> Login</Button>
                <Button type="submit"> Register</Button>
              </Buttons>
            </FormDiv>
          </Form>
        );
      }}
    />
  );
}

export default withFormik({
  mapPropsToValues: currentValues => {
    return {
      username: currentValues.username || "",
      password: currentValues.password || ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  }),
  handleSubmit: values => {
    console.log(values);
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
