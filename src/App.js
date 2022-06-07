import React from "react";
import { Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";
import ProductView from "./components/ProductView";

const App = () => {

    return (
        <Routes>
            <Route path="/products" element={<Grid />}></Route>
            <Route path="/product_view/:id" element={<ProductView />}></Route>

        </Routes>
    )
}

export default App;