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
import  Profile  from './components/Profile';
//import Users from './components/Users';
import  History  from './components/History';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ProductView from "./components/ProductView"
import ProfileEdit from "./commons/ProfileEdit";
import NewProduct from "./components/NewProduct"
import UserSingleView from "./components/UserSingleView"
import ProductAdminView from "./components/ProductAdminView";
import AdminView from "./components/AdminView";





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
                <Route exact path='/SuperAdmin/users' element={<SuperAdmin />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/:id" element={<ProductView />} />

                <Route exact path="/SuperAdmin/users/:dni" element={<UserSingleView />} />

                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/profile_edit" element={<ProfileEdit />} />
                <Route path='/history' element={<History />} /> 
                {/*  
                <Route exact path="/users" element={<Users />} /> */}             
                 <Route exact path="/checkout" element={<Checkout />} /> 
                {/* <Route exact path="/new_product" element={<NewProduct />} />
                <Route path='/update_product/:id' element={<NewProduct />} /> */}
                <Route exact path='/update_product' element={<ProductAdminView />}/>
                <Route exact path='/update_product/:search' element={<ProductAdminView />}/>
                <Route exact path='/update_product/single/:id' element={<AdminView />}/>
                <Route exact path='/create_product' element={<AdminView />}/>
                


               {/*  
                <Route exact path="/users" element={<Users />} /> */}
               {/*  <Route exact path="/profile" element={<Profile />} />
                <Route path='/history' element={<History />} /> */}
                {/* <Route exact path="/checkout" element={<Checkout />} /> */}


            </Routes>
        </>

    );
};
