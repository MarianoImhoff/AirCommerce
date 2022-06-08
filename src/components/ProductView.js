import React from 'react';
import { useLocation } from "react-router";
import shoes from "../utils/shoes.json";
import Carousel from "../commons/Carousel";
//import Button from "../commons/Button";
import s from "../styles/ProductView.module.css";

const ProductView = () => {
    let id = useLocation().pathname.slice(1) - 1;
    let buttonName = "Add to cart";

    const isAdmin = false; //Esto se debe traer de la db y almacenarse en el contexto

    return (
        <>
        <div className={s.productContainer}>
            <img className={`${s.column} ${s.productImg}`} src={require(`../utils/img${shoes[id].url_path}`)} alt={shoes[id].name}></img>
            <div className={`${s.column} ${s.productDetails}`}>
                <p className={s.productTitle}>{`${shoes[id].brand} ${ shoes[id].model}`}</p> 
                <p>{`Size: ${shoes[id].size}`}</p> 
                <p>{`Color: ${shoes[id].color}`}</p> 
                <p>{`Stock: ${shoes[id].stock} units available`}</p> 
                <p>{`Price: USD ${shoes[id].price}`}</p> 
                <p>{`Rating: ${shoes[id].rating === 0 ? "Not yet rated" : shoes[id].rating}`}</p> <br/>
                <button className={s.productButton}
                type="submit"
                >{buttonName}</button>
            </div>
            <Carousel id={id}/>
        </div>

        </>
    )
}

export default ProductView;