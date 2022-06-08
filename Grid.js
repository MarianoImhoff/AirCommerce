import shoes from "../utils/shoes.json";
import ShoesCard from "./ShoesCard";
import s from "../styles/ShoesGrid.module.css"

const Grid = () => {
    let shoesAux = [];
    let i = 0;
    while (i < 9) {
        let j = Math.floor(Math.random()* shoes.length);
        shoesAux.push(shoes[j]);
        i++;
    }

    return (
        <ul className={s.shoesGrid}>
            {shoesAux.map(shoe => <ShoesCard shoe={shoe}/>)}
        </ul>
    )
};

export default Grid;