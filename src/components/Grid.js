<<<<<<< HEAD
import React from 'react';

import ShoesCard from './ShoesCard';
import s from '../styles/ShoesGrid.module.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Grid = () => {
  const [shoeSearch, setShoeSearch] = useState([]);
  const { search } = useParams();

  const handleSort = (type) => {
    axios
      .get(`http://localhost:8080/api/products/sortBy/${type}/${search}`)
      .then((info) => setShoeSearch(info.data));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${search}`)
      .then((info) => setShoeSearch(info.data));
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <div class={s.dropdown} key={'Sort'}>
        <button class={s.dropbtn}>Sort By</button>
        <div class={s.dropdownContent}>
          <a
            onClick={() => {
              handleSort('brand');
            }}
          >
            <p>Brand</p>
          </a>
          <a
            onClick={() => {
              handleSort('size');
            }}
          >
            <p>Size</p>
          </a>
          <a
            onClick={() => {
              handleSort('price');
            }}
          >
            <p>Price</p>
          </a>
        </div>
      </div>

      <ul className={s.shoesGrid}>
        {shoeSearch.map((shoe) => (
          <ShoesCard shoe={shoe} />
        ))}
      </ul>
      <button>Next</button>
    </div>
  );
};

export default Grid;
=======
import React from "react"

import ShoesCard from "./ShoesCard";
import s from "../styles/ShoesGrid.module.css"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const Grid = () => {

    const [shoeSearch, setShoeSearch] = useState([])
    const {search} = useParams()
   // console.log(search);

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
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
