import React from 'react';
import { withFormik, Form , Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const RegFormDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        ${'' /* height: 250px; */}

`;

function RegisterationForm() {
    return (

        
     <Form className='form-Border'>

        <RegFormDiv>
            <Field type='text' name='firstname' placeholder='First name'/>
            <Field type='text' name='lastname' placeholder='Last name'/>
            <Field type='text' name='username' placeholder='Username'/>
            <Field type='password' name='password' placeholder='Password'/> 
            <button type='submit'>Register Now</button>
        </RegFormDiv>

        {/* Create a Registration Form, add input fields for First Name, last name, 
        ,email, password */}
    


    </Form>

)

}

export default  withFormik({

mapPropsToValues: (currentValues) => {

// Link up react controlled inputs to field names...

return {
  firstname: currentValues.firstname ||  '',
  lastname: currentValues.lastname || '',
  username: currentValues.username || '',
  password: currentValues.password || ''
}
},
validationSchema: yup.object().shape({
firstname: yup.string().required(),
lastname: yup.string().required(),
username: yup.string().required(),
password: yup.string().required(),
}),
handleSubmit: (values) => {
console.log(values);
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

})(RegisterationForm)
