import React from 'react';
import { useLocation } from "react-router";
import shoes from "../utils/shoes.json";
import Carousel from "../commons/Carousel";
//import Button from "../commons/Button";
import s from "../styles/ProductView.module.css";
import ClientView from './ClientView.js';

const ProductView = () => {
    let id = useLocation().pathname.slice(1) - 1;
    let buttonName = "Add to cart";

    const isAdmin = false; //Esto se debe traer de la db y almacenarse en el contexto

    return (
        <>
        <div className={s.productContainer}>
            <img className={`${s.column} ${s.productImg}`} src={require(`../utils/img${shoes[id].url_path}`)} alt={shoes[id].name}></img>
            <div className={`${s.column} ${s.productDetails}`}>
            {}
            <ClientView shoes={shoes} id={id}/>
            </div>
            <Carousel id={id}/>
        </div>

        </>
    )
}

export default ProductView;