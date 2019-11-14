import React from "react";

//we need formik, yup, and axios// 

function Login() {
  return (
    <div className="Login">
      This is a Login!
      <form>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <button>Login</button>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Login;
