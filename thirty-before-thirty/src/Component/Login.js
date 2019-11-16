import React from "react";

import { Formik, Form, Field } from "formik";

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
            <Field type="text" name="username" placeholder="Username" />
            <Field type="password" name="password" placeholder="Password" />

            <input type="submit" />
          </Form>
        );
      }}
    />
  );
}

export default Login;
