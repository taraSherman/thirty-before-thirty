import React , { useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import { Route, Link } from 'react-router-dom';
import Login from "./Login";
import * as Yup from "yup";
import api from "../withAuth";

// import styled from "styled-components";




function Register( props) {
    console.log('Register props',props)


  const [user, setUser] = useState([]);

  useEffect(() => {
    if (props.status) {
      setUser([...user, props.status]);
    }
  }, [ props.status, user]);


  return (
    <div>
      <Form>
        <label>
          {props.touched.email && props.errors.email && <p className="errors">{props.errors.email}</p>}
          <Field type="text" name="email" placeholder="Email" />
        </label>
        <label>
          {props.touched.password && props.errors.password && <p className="errors">{props.errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
         
        </label>
        <button type="submit">Sign Up!</button>
      </Form>

      <Link to="/">Return to Login</Link>
      <Route to exact path="/" render={()=> <Login />} />
      <h1>{user}</h1>
    </div>
  );
};

export default withFormik({
  mapPropsToValues:({ email, password }) => {
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
      console.log( values);
    api
      .post("/auth/register", values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(Register);

// function backToLogin(props) {
//     console.log('backtologin' ,props);
//     props.history.push('/');
//  }
