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
    <div className={s.sortButtonContainer}>
    <button onClick={() => {
                  handleSort('brand');
                }}
              >
                Brand
              </button>
              <button onClick={() => {
                  handleSort('size')
                }}>
                
              
                Size
              </button>
              <button
                onClick={() => {
                  handleSort('price')
                }}
              >
                Price
              </button>
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
