import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { TextField } from '../commons/TextField';
// import useInput from '../hooks/useInput';

const Signup = () => {

  const navigate = new useNavigate();

  const handleRegister = (values) => {
    console.log('REGISTRAR');
    axios
      .post('/users/register', {
        name: values.name,
        surname: values.surname,
        email: values.email,
        dni: values.dni,
        address: values.address,
        password: values.password,
      })
      .then((user) => {
        console.log(user);
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  const validate = Yup.object({
    name: Yup.string().required('Se requiere un nombre'),
    surname: Yup.string().required('Se requiere un apellido'),
    email: Yup.string()
      .email('El email ingresado no es válido')
      .required('Se requiere un email'),
    dni: Yup.number()
      .min(7, 'El DNI debe tener al menos 7 cifras')
      .required('Se requiere su número de DNI'),
    address: Yup.string().required('Se requiere un domicilio'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('Se requiere contraseña'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'La contraseña no coincide')
      .required('Se requiere confirmación de contraseña'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        dni: '',
        address: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        handleRegister(values);
      }}
    >
      {(formik) => (
        <div>
          <h3>Sign In</h3>
          <Form>
            <TextField label="Nombre" name="name" type="text" />
            <TextField label="Apellido" name="surname" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="DNI" name="dni" type="text" />
            <TextField label="Domicilio" name="address" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirmá password"
              name="confirmPassword"
              type="password"
            />
            <button type="submit">Sign Up</button>
            <button type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  );

  // VERSIÓN SIN FORMIK

  // const navigate = new useNavigate();

  // const name = useInput('name');
  // const surname = useInput('surname');
  // const email = useInput('email');
  // const dni = useInput('dni');
  // const address = useInput('address');
  // const password = useInput('password');

  // const handleRegister = (event) => {
  //   event.preventDefault();
  //   console.log('REGISTRAR');
  //   axios
  //     .post('/users/register', {
  //       name: name.value,
  //       surname: surname.value,
  //       email: email.value,
  //       dni: dni.value,
  //       address: address.value,
  //       password: password.value,
  //     })
  //     .then((user) => {
  //       console.log(user);
  //       navigate('/login');
  //     })
  //     .catch((err) => console.log(err));
  // };

  // return (
  //   <div className="">
  //     <h3 className="">Sign In</h3>
  //     <form onSubmit={handleRegister}>
  //       <div className="">
  //         <label className="">Nombres</label>
  //         <div className="">
  //           <input
  //             className="input"
  //             type="text"
  //             placeholder="Tus nombres"
  //             required
  //             {...name}
  //           />
  //         </div>
  //       </div>
  //       <div className="">
  //         <label className="">Apellidos</label>
  //         <div className="">
  //           <input
  //             className="input"
  //             type="text"
  //             placeholder="Tus apellidos"
  //             required
  //             {...surname}
  //           />
  //         </div>
  //       </div>
  //       <div className="">
  //         <label className="">E-mail</label>
  //         <div className="">
  //           <input
  //             className="input"
  //             type="text"
  //             placeholder="Tu e-mail"
  //             required
  //             {...email}
  //           />
  //         </div>
  //       </div>
  //       <div className="">
  //         <label className="">DNI</label>
  //         <div className="">
  //           <input
  //             className="input"
  //             type="text"
  //             placeholder="Tu dni"
  //             required
  //             {...dni}
  //           />
  //         </div>
  //       </div>
  //       <div className="">
  //         <label className="">Domicilio</label>
  //         <div className="">
  //           <input
  //             className="input"
  //             type="text"
  //             placeholder="Tu dirección"
  //             required
  //             {...address}
  //           />
  //         </div>
  //       </div>
  //       <div className="">
  //         <label className="">Password</label>
  //         <p className="">
  //           <input
  //             className="input"
  //             type="password"
  //             placeholder="Password"
  //             required
  //             {...password}
  //           />
  //           <span className="">
  //             <i className=""></i>
  //           </span>
  //         </p>
  //       </div>
  //       <div className="">
  //         <p className="">
  //           <button className="">Sign In</button>
  //         </p>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default Signup;
