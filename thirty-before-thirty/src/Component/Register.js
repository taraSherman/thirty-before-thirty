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
        <Field type="text" name="email" placeholder="email"></Field>
        <Field type="password" name="password" placeholder="password"></Field>
        <button type="submit">Sign Up!</button>
      </Form>
      or sign in here <button>Login</button>
    </div>
  );
}

export default Register;
