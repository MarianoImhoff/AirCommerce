import React from "react"

import ShoesCard from "./ShoesCard";
import s from "../styles/ShoesGrid.module.css"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const Grid = () => {

    const [shoeSearch, setShoeSearch] = useState([])
    const {search} = useParams()
    console.log(search);

useEffect(() => {
    axios.get(
        `http://localhost:8080/api/products/${search}`)
        .then(info => setShoeSearch(info.data))
}, []);


    return (
        <ul className={s.shoesGrid}>
            {shoeSearch.map(shoe => <ShoesCard shoe={shoe}/>)}
        </ul> 
    )
};

export default Grid;