import React from "react";
import "./App.css";
import { Formik, Form , Field } from 'formik';

function App() {
  return (
    <Formik 
        initialValues= {{ username: '', password: ''}}
        onSubmit={(...appUsers) => {
            console.log(appUsers)
          
        }}
        render = {props => {
            return(
              <Form>
                <Field type='text' name='username' placeholder='Username'/>
                <Field type='password' name='password' placeholder='Password'/> 
                
                <input type='submit' />

              </Form>
            )

        }}

    />
  )
}

export default App;
