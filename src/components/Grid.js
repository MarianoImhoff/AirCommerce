import shoes from "../utils/shoes.json";
import ShoesCard from "./ShoesCard";
import s from "../styles/ShoesGrid.module.css"

const Grid = () => {
    return (
        <ul className={s.shoesGrid}>
            {shoes.map(shoe => <ShoesCard shoe={shoe}/>)}
        </ul>

    )
};

export default Grid;