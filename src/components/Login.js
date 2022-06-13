import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import useInput from '../hooks/useInput';

import { AuthContext } from '../context/AuthContext';

const LogIn = () => {
  const navigate = new useNavigate();
  const { user, toggleAuth } = useContext(AuthContext);

  const handleSubmit = (values) => {
    axios
      .post('/users/login', {
        email: values.email,
        password: values.password,
      })
      .then((user) => {
        console.log('USUARIO LOGUEADO');
        console.log(user.data);
        localStorage.setItem('user', JSON.stringify(user.data));
        toggleAuth(user.data.name);
      })
      .then(() => navigate('/Store'))
      .catch((err) => console.log('ERROR: ', err));
  };

  const validate = Yup.object({
    email: Yup.string()
      .email('El email ingresado no es válido')
      .required('Se requiere un email'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('Se requiere contraseña'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(formik) => (
        <div className="container w-75 mt-4">
          <h3>Sign Up</h3>
          <Form>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <Field
                name="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
                type="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                className={
                  formik.touched.password && formik.errors.password
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
                type="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="mt-4 d-flex flex-row">
              <div className="form-group me-4">
                <Button type="submit" variant="dark">
                  Login
                </Button>
              </div>
            </div>
          </Form>
          <p className="mt-4">
            Don't have an accout?&nbsp;
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      )}
    </Formik>
  );
};

export default LogIn;
