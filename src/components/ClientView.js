import s from "../styles/ProductView.module.css";

const ClientView = ({shoes, id}) => {

  console.log(shoes)

  let buttonName = "Add to cart";
    return (
        <div>
            <p className={s.productTitle}>{`${shoes[id].brand} ${ shoes[id].model}`}</p> 
                <p>{`Size: ${shoes[id].size}`}</p> 
                <p>{`Color: ${shoes[id].color}`}</p> 
                <p>{`Stock: ${shoes[id].stock} available`}</p> 
                <p>{`Price: USD ${shoes[id].price}`}</p> 
                {/* <p>{`Rating: ${shoes[id].rating === 0 ? "Not yet rated" : shoes[id].rating}`}</p> */} <br/>
                <button className={s.productButton}
                type="submit"
                >{buttonName}</button>
        </div>
                
        
    )
}

export default ClientView;