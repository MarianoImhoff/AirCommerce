import s from "../styles/ProductView.module.css";
import capitalizeFirst from "../utils/functions/capitalizeFunction";
//import Button from "../commons/Button";

const ClientView = ({shoes, id}) => {

  //localStorage.isAdmin 

  let buttonName = "Add to cart";
    return (
        <div>
            <p className={s.productTitle}>{`${capitalizeFirst(shoes.brand)} ${capitalizeFirst(shoes.model)}`}</p> 
            <p><span>Size: </span><span>{`${shoes.size}`}</span></p> 
            <p><span>Color: </span>{`${capitalizeFirst(shoes.color)}`}</p> 
            <p>{`Stock: ${shoes.stock} available`}</p> 
            <p>{`Price: USD ${shoes.price}`}</p> 
            <button className={s.productButton}
                type="submit"
            >{buttonName}</button>
        </div>
    )
}

export default ClientView;