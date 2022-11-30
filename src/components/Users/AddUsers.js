import React, { useState } from "react";
import axios from 'axios'
import { TextField, Button } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const AddUser = () => {
  const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    termsAndConditions: false
  }
  let history = useHistory();
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    username: Yup.string().email("Enter valid email").required("Required"),
    email: Yup.string().required("Required"),
    website: Yup.string().required("Required"),
    phone:Yup.string().required("Required"),
  })
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });





  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value })
  };
  const onSubmit = async (values, e) => {

    await axios.post("http://localhost:3002/users", {
      // name: values.name,
      // username: values.username,
      // email: values.email,
      // phone: values.phone,
      // website: values.website
    });

    console.log(values)


    history.push("/")
  };
  return (
    <div className="container">
      <div Classname="w-75 mx-auto shadow p-5">
        <h2 className="bhuvi" >Add A User</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

          <Form >
            <div class="form-group">
              <Field as={TextField}
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your Name"
                name="name"

                helperText={<ErrorMessage name="name" />}
              />
              <br />

            </div>
            <div class="form-group">


              <Field as={TextField}
                type="text" className="form-control form-control-lg"
                placeholder="Enter your UserName"
                name="username"
                helperText={<ErrorMessage name="username" />}

              />
              <br />

            </div>

            <div class="form-group">

              <Field as={TextField}
                type="text" className="form-control form-control-lg"
                placeholder="Enter your Email"
                name="email"
                helperText={<ErrorMessage name="email" />}

              />
              <br />
            </div>

            <div class="form-group">

              <Field as={TextField} type="text" className="form-control form-control-lg"
                placeholder="Enter your Phone Number" name="phone"
                helperText={<ErrorMessage name="phone" />}
              />
              <br />
            </div>

            <div class="form-group">

              <Field as={TextField}
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your Website Name"
                name="website"
                helperText={<ErrorMessage name="website" />}
              />

            </div>

            <button type='submit'
             variant='contained' 
             style={{ margin: '2' }} 
             className="btn btn-primary btn-block">Add user</button>
          </Form>
        </Formik>

      </div>


    </div>
  )
}
export default AddUser;