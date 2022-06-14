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
    <div className={s.dropdown} key={'SortB'}>
    <button className={s.dropbtn}>Brand</button>
    <div className={s.dropdownContent}>
    <a  onClick={() => {handleSort('+brand')}}><p>A-Z</p></a>
    <a  onClick={() => {handleSort('-brand')}}><p>Z-A</p></a>
    </div>
    </div>
    
    <div className={s.dropdown} key={'SortP'}>
    <button className={s.dropbtn}>Price</button>
    <div className={s.dropdownContent}>
    <a  onClick={() => {handleSort('+price')}}><p>Lower-Higher</p></a>
    <a  onClick={() => {handleSort('-price')}}><p>Higher-Lower</p></a>
    </div>
    </div>
    <div className={s.dropdown} key={'SortS'}>
    <button className={s.dropbtn}>Size</button>
    <div className={s.dropdownContent}>
    <a  onClick={() => {handleSort('+size')}}><p>Lower-Higher</p></a>
    <a  onClick={() => {handleSort('-size')}}><p>Higher-Lower</p></a>
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
