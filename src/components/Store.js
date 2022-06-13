import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import ShoesCard from './ShoesCard';
import SortBy from "./SortBy"
import s from '../styles/ShoesGrid.module.css';
import { useNavigate } from 'react-router';

const Store = () => {
  const [store, setStore] = useState([]);
  const navigate = useNavigate();

  const handleSort = async (type) => {
   
    navigate(`/Store/sortBy/${type}`)
  };

  
  
  useEffect(async () => {
    try {
      let str = await axios.get(`http://localhost:8080/api/products`);
      str = str.data;
      let shoesAux = [];
      let numAux = [];
      let randNum = 0;
      for (let i = 0; i < 9; i++) {
        randNum = Math.floor(Math.random() * str.length);
        if (numAux.includes(randNum) === true) {
          i = i - 1;
        } else {
          numAux.push(randNum);
          shoesAux.push(str[randNum]);
        }
      }
      setStore(shoesAux);
      
    } catch (error) {console.log(error)}
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
            {store.map((shoe) => (
              <ShoesCard shoe={shoe} />
            ))}
          </ul>
          <button>Next</button>
        </div>
      
  );
};


export default Store;
