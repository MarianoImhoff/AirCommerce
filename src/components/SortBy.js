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
    <ul className={s.shoesGrid}>{sort.map((shoe) => (<ShoesCard shoe={shoe} />))}
          </ul>
          <button>Next</button>
        </div>
  );
};

export default SortBy;



