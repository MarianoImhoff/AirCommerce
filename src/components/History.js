import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
//import s from "../styles/ProductView.module.css";
import ClientView from './ClientView.js';



const History = () => {
   
    const [shoes, setShoes] = useState({});

    useEffect(() => {
        axios
        .get(`/products/single/id`)
        .then(product => setShoes(product))
        .catch(error => console.log(error))
    }, [])

    if(shoes.model === undefined) return null;

  return (
    <div>
        <div className="">
            <img className="" src={require(`../utils/img${shoes.url_path}`)} alt={shoes.model}></img>
            <div className=""><ClientView shoes={shoes} /></div>
        </div>
        
    </div>
  )
}

export default History