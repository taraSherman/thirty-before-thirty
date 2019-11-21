import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import api from "../withAuth";

function Register({ touched, errors, status }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (status) {
      console.log("status :", status);
      setUser([...user, status]);
    }
  }, [status]);
  return (
    <div>
      <Form>
        <label>
          <Field type="text" name="email" placeholder="email"></Field>
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </label>
        <label>
          <Field type="password" name="password" placeholder="password"></Field>
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </label>
        <button type="submit">Sign Up!</button>
      </Form>
      or sign in here <button>Login</button>
    </div>
  );
}

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { setStatus }) {
    api
      .post("/auth/register", values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(Register);
