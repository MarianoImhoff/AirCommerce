import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Container, Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import s from '../styles/LogIn_SignUp.module.css';

const LogIn = () => {
  const navigate = useNavigate();
  const { toggleAuth } = useContext(AuthContext);

  //Formik, Semantic and Yup are used to validate the form inputs in an easier way

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please, enter a valid email')
        .required('Please, enter a valid email'),
      password: Yup.string().required('Please, enter your password'),
    }),
    onSubmit: (credentials) => {
      axios
        .post('http://localhost:3001/api/users/auth', {
          email: credentials.email,
          password: credentials.password,
        })
        .then((serverAnswer) => {
          console.log('SERVER ANSWER: ', serverAnswer);
          if (
            serverAnswer.data === 'Your password is incorrect' ||
            serverAnswer.data ===
              'We cannot find an account with that email address'
          ) {
            alert(serverAnswer.data);
            navigate('/login');
          } else {
            toggleAuth(serverAnswer.data);
            navigate('/home');
          }
        });
    },
  });

  return (
    <div>
      <Container className={s.container}>
        <Form className={s.form} onSubmit={formik.handleSubmit}>
          <h3>Log in with your email and password</h3>
          <Form.Input
            className={s.input}
            type="email"
            name="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email && true}
          />
          <Form.Input
            className={s.input}
            type="password"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password && true}
          />{' '}
          <br />
          <Button className={s.button} type="submit">
            CONTINUE
          </Button>
        </Form>
        <p>
          Don't have an accout?
          <Link to="/signup">Sign up</Link>
        </p>
      </Container>
    </div>
  );
};

export default LogIn;
