import React from "react"
import { Route, Routes } from 'react-router';

import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import Home from "./components/Home"
import Store from "./components/Store";
import Login from "./components/Login"
<<<<<<< HEAD
import Signup from "./components/Signup" 
import Account from "./components/Account"
import SortBy from "./components/SortBy"
import SuperAdmin from "./components/SuperAdmin"
/* import Users from './components/Users';
import  Profile  from './components/Profile';
=======
import Signup from "./components/Signup"
import Account from "./components/Account"
import Profile from './components/Profile';
/* import Users from './components/Users';
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
import  History  from './components/History'; */
import Cart from "./components/Cart";
/* import Checkout from "./components/Checkout"; */
import ProductView from "./components/ProductView"
<<<<<<< HEAD
/* import NewProduct from "./components/NewProduct" */
=======
import NewProduct from "./components/NewProduct"
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075



export default function App() {


    return (
        <>
<<<<<<< HEAD
        <div>
             <Navbar /> 
             
        </div>

            <Routes>
              <Route exact path="/" element={<Home />} />
=======
            <div>
                <Navbar />
            </div>

            <Routes>
                <Route exact path="/" element={<Home />} />
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
                <Route exact path="/Store/:search" element={<Grid />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/Store" element={<Store />} />
                <Route path='/account/:user' element={<Account />} />
<<<<<<< HEAD
                <Route path='/Store/sortBy/:type' element={<SortBy />} />
                <Route path='/SuperAdmin/users' element={<SuperAdmin/>} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/:id" element={<ProductView />} />

               {/*  
                <Route exact path="/users" element={<Users />} /> */}
               {/*  <Route exact path="/profile" element={<Profile />} />
                <Route path='/history' element={<History />} /> */}
                {/* <Route exact path="/checkout" element={<Checkout />} /> */}
                {/* <Route exact path="/new_product" element={<NewProduct />} />
=======
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/cart" element={<Cart />} />

                <Route exact path="/:id" element={<ProductView />} />
                <Route exact path="/new_product" element={<NewProduct />} />
                {/*  
                <Route exact path="/users" element={<Users />} /> */}
                {/*  
                <Route path='/history' element={<History />} /> */}
                {/* <Route exact path="/checkout" element={<Checkout />} /> */}
                {/* 
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
                <Route path='/update_product/:id' element={<NewProduct />} /> */}
            </Routes>
        </>

    );
};
