import React from "react"
import {Link} from "react-router-dom";
import s from "../styles/ShoesCard.module.css";
import capitalizeFirst from "../utils/functions/capitalizeFunction";

const ShoesCard = ({shoe}) => {
    
    return (
        <li className={s.shoesCard}>
            <Link to={`/${shoe.id}` }>
                <img className={s.shoesImage} src={require(`../utils/img${shoe.url_path}`)} alt={shoe.model}></img>
            </Link>
            <div>{capitalizeFirst(shoe.brand)}</div>
            <div>{capitalizeFirst(shoe.model)}</div>
            <div>{`USD ${shoe.price}`}</div>
        </li>
    )
}

export default ShoesCard;