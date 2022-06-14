import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router";
import find from '../utils/functions/findFunction';
import create from '../utils/functions/createFunction';
import Carousel from "../commons/Carousel";
import s from "../styles/ProductAdminView.module.css";
import ClientView from './ClientView.js';
import ProductView from "./ProductView";
import SearchAdmin from "./SearchAdmin";
import ShoesAdminCard from './ShoesAdminCard';



const ProductAdminView = () => {
    //let location = useLocation().pathname.slice(1,15); 
    //let id = useParams().id;
    //let search = useLocation().search.slice(2)
    const { search } = useParams();

    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        find(`/products/${search}`)
        .then(productObj => setShoes(productObj))
        .catch(error => console.log(error))
    }, [search])

    //if(shoes.model === undefined) return null;
 
    return (
        <div>
            <SearchAdmin/> 
            <ul className={s.productsGrid}>{shoes.map((shoe) => (<ShoesAdminCard key={shoe.id} shoe={shoe} />))}</ul>
        </div>
    )
}

export default ProductAdminView;