import React from "react"
import { Route, Routes } from 'react-router';

import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import Home from "./components/Home"
import Store from "./components/Store";
import Login from "./components/Login"
import Signup from "./components/Signup" 
import Account from "./components/Account"
import SortBy from "./components/SortBy"
import SuperAdmin from "./components/SuperAdmin"
/* import Users from './components/Users';
import  Profile  from './components/Profile';
import  History  from './components/History'; */
import Cart from "./components/Cart";
/* import Checkout from "./components/Checkout"; */
import ProductView from "./components/ProductView"
import NewProduct from "./components/NewProduct"



export default function App() {


    return (
        <>
            <div>
                <Navbar />
            </div>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Store/:search" element={<Grid />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/Store" element={<Store />} />
                <Route exact path='/account/:user' element={<Account />} />
                <Route exact path='/Store/sortBy/:type' element={<SortBy />} />
                <Route exact path='/SuperAdmin/users' element={<SuperAdmin/>} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/:id" element={<ProductView />} />

               {/*  
                <Route exact path="/users" element={<Users />} /> */}
               {/*  <Route exact path="/profile" element={<Profile />} />
                <Route path='/history' element={<History />} /> */}
                {/* <Route exact path="/checkout" element={<Checkout />} /> */}
                {/* <Route exact path="/new_product" element={<NewProduct />} />
                <Route path='/update_product/:id' element={<NewProduct />} /> */}
            </Routes>
        </>

    );
};
