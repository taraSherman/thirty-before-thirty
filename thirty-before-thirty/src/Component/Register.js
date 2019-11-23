import React , { useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import { Route, Link } from "react-router-dom";
import * as Yup from "yup";
import api from "../withAuth";
import Login from "./Login";
// import styled from "styled-components";

const Register = ({ touched, errors, status }) => {
  const [user, setUser] = useState([]);
  // const callback = useCallback
  useEffect(() => {
    if (status) {
      return setUser([...user, status]);
    }
  }, [status]);
  return (
    <div>
      <Form>
        <label>
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
          <Field type="text" name="email" placeholder="Email" />
        </label>
        <label>
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
          <Field type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up!</button>
      </Form>

      
        <Link to="/">Return to Login</Link>
        <Route to exact path="/" render={() => <Login />} />
      
      <button>Ready to login?</button>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: ({ email, password }) => {
    return {
      email: email || " ",
      password: password || " "
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
    .email()
    .required(),
    password: Yup.string()
    .min(6)
    .max(10)
    .required()
  }),

  handleSubmit: (values, { setStatus }) => {
    console.log(values);

    api
      .post("/auth/register", values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(Register);
