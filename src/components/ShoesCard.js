import React from "react"
import {Link} from "react-router-dom";
import s from "../styles/ShoesCard.module.css";

const ShoesCard = ({shoe}) => {

    return (
        <li className={s.shoesCard}>
            <Link to={`/${shoe.id}` }>
                <img className={s.shoesImage} src={require(`../utils/img${shoe.url_path}`)} alt={shoe.model}></img>
            </Link>
            <div>{shoe.brand}</div>
            <div>{shoe.model}</div>
            <div>{`USD ${shoe.price}`}</div>
            {/* <div>{shoe.rating === 0 ? "Not yet rated" : shoe.rating}</div> */}
        </li>
    )
}

export default ShoesCard;