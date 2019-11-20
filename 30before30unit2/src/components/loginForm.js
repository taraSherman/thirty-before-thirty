import React from 'react';
import '../App.css';
import { withFormik, Form , Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

// const FormDiv = styled.div`
// background: red 
// `

    
    

  function LoginForm () {

    return (
        
            <Form className='form-Border'>
                <Field type='text' name='username' placeholder='Username'/>
                <Field type='password' name='password' placeholder='Password'/> 
                <button type='submit'>Log In!</button>
            

            {/* // "Not a member? Register here" button? */}

            </Form>
        
      )

  }

  export default  withFormik({

    mapPropsToValues: (currentValues) => {

        return {
          username: currentValues.username || '',
          password: currentValues.password || ''
        }
    },
    validationSchema: yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
    }),
    handleSubmit: (values) => {
      console.log(values)
            axios.post('https://buildweek30before30.herokuapp.com/api', values)
            //if response is valid then log this..
             .then((response) => {
                console.log(response)
            })
            //if response isinvalid then log this..
            .catch((err)=> {
                console.log(err)

            })
      
    }

  })(LoginForm)