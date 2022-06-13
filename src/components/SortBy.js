import React from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ShoesCard from './ShoesCard';
import s from '../styles/ShoesGrid.module.css';

const SortBy = () => {
  const [sort, setSort] = useState([])
  const navigate = useNavigate();
  const  {type}  = useParams()
  console.log(type)
  

  const handleSort = async (type) => {
      navigate(`/Store/sortBy/${type}`)
    
   };


  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/sortBy/${type}`)
    .then(info =>setSort(info.data))
  },[type]) 

 

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
                  handleSort('size')
                }}
              >
                <p>Size</p>
              </a>
              <a
                onClick={() => {
                  handleSort('price')
                }}
              >
                <p>Price</p>
              </a>
            </div>
          </div>
    
          <ul className={s.shoesGrid}>
            {sort.map((shoe) => (
              <ShoesCard shoe={shoe} />
            ))}
          </ul>
          <button>Next</button>
        </div>
  );
};

export default SortBy;
