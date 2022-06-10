import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import useInput from '../hooks/useInput';

import { AuthContext } from '../context/AuthContext';

const LogIn = () => {
  const navigate = useNavigate();
  const { user, toggleAuth } = useContext(AuthContext);

  const email = useInput('email');
  const password = useInput('password');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('LOGUEAR...');
    console.log('EMAIL: ', email.value);
    console.log('PASSWORD: ', password.value);
    axios
      .post('/users/login', {
        email: email.value,
        password: password.value,
      })
      .then((user) => {
        //console.log('USUARIO LOGUEADO');
        //console.log(user.data);
        localStorage.setItem("user", JSON.stringify(user.data))
        toggleAuth(user.data.name);
       
      })
      .then(()=>  navigate('/Store'))
      .catch((err) => console.log('ERROR: ', err));
  };

  

  return (
    <div className="">
      <h3 className="">Log In</h3>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="">Email</label>
          <div className="">
            <input
              className="input"
              type="email"
              placeholder="Tu email"
              required
              {...email}
            />
            <span className="">
              <i className=""></i>
            </span>
          </div>
        </div>
        <div className="">
          <label className="">Password</label>
          <p className="">
            <input
              className=""
              type="password"
              placeholder="Password"
              required
              {...password}
            />
            <span className="">
              <i className=""></i>
            </span>
          </p>
        </div>
        <div className="">
          <p className="">
            <button className="">Log In</button>
          </p>
        </div>
      </form>
      <p>
        Don't have an accout?
        <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default LogIn;
