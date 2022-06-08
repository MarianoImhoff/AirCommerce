import React from 'react';
import { Container, Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import s from '../styles/LogIn_SignUp.module.css';

const Signup = () => {
  const navigate = useNavigate();

  //Formik, semantic and yup are used to validate the form inputs in an easier way

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      dni: '',
      address: '',
      phone: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .email('A valid email is required')
        .required('Email is required'),
      dni: Yup.number().required('DNI is required'),
      address: Yup.string().required('Address is required'),
      phone: Yup.number().required('Phone number is required'),
      password: Yup.string()
        .required()
        .oneOf(
          [Yup.ref('repeatPassword')],
          'Entered passwords must be the same'
        ),
      repeatPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password')], 'Entered passwords must be the same'),
    }),
    onSubmit: (user) => {
      axios
        .post('http://localhost:8080/api/users/register', {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          dni: user.dni,
          address: user.address,
          phone: user.phone,
          password: user.password,
        })
        .then((serverAnswer) => {
          alert(serverAnswer.data);
          navigate('/login');
        });
    },
  });

  return (
    <Container className={s.container}>
      <Form className={s.form} onSubmit={formik.handleSubmit}>
        <h3>Enter your first name</h3>
        <Form.Input
          className={s.input}
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          error={formik.errors.firstName && true}
        />
        <h3>Enter your last name</h3>
        <Form.Input
          className={s.input}
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          error={formik.errors.lastName && true}
        />
        <h3>Enter your email</h3>
        <Form.Input
          className={s.input}
          type="email"
          name="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email && true}
        />
        <h3>Enter your DNI</h3>
        <Form.Input
          className={s.input}
          type="text"
          name="dni"
          placeholder="dni"
          onChange={formik.handleChange}
          value={formik.values.dni}
          error={formik.errors.dni && true}
        />
        <h3>Enter your address</h3>
        <Form.Input
          className={s.input}
          type="text"
          name="address"
          placeholder="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          error={formik.errors.address && true}
        />
        <h3>Enter your phone number</h3>
        <Form.Input
          className={s.input}
          type="text"
          name="phone"
          placeholder="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.errors.phone && true}
        />
        <h3>Enter your password</h3>
        <Form.Input
          className={s.input}
          type="password"
          name="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password && true}
        />
        <h3>Re-enter your password</h3>
        <Form.Input
          className={s.input}
          type="password"
          name="repeatPassword"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
          error={formik.errors.repeatPassword && true}
        />{' '}
        <br />
        <Button className={s.button} type="submit">
          CONTINUE
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
