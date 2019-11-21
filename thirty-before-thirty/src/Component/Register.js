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
      <form>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <button type="submit">Sign Up!</button>
      </form>
      or sign in here <button>Login</button>
    </div>
  );
}

export default Register;
