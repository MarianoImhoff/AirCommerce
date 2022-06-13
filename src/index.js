<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AuthContextProvider from "./context/AuthContext";



ReactDOM.render(

    <BrowserRouter>
     <AuthContextProvider> 
        <App />

     </AuthContextProvider> 
    </BrowserRouter>,
    

    document.getElementById("root")
);

=======
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AuthContextProvider from './context/AuthContext';
import { CartContextProvider } from './context/CartContext';
import reducer, { initialState } from './context/CartReducer';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <CartContextProvider initialState={initialState} reducer={reducer}>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,

  document.getElementById('root')
);
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
