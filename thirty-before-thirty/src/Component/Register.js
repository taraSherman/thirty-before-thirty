import React from "react";

function Register() {
  return (
    <div>
      <form>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <button type="submit">Sign Up!</button>
      </form>
      ...or sign in here <button>Login</button>
    </div>
  );
}

export default Register;
