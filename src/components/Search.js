import { FormControl, Button } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import ShoesCard from "./ShoesCard";
import s from "../styles/ShoesGrid.module.css"


const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [searchShoe, setSearchShoe] = useState([]);


    const handleSubmit = (e) => {
        console.log("esto es el buscador");
        e.preventDefault();
        //pedido axios
        axios.get(
            `http://localhost:8080/api/products/${searchText}`)
            .then(data => setSearchShoe(data.data.results))

    };

    const handleChange = (e) => {
        setSearchText(e.target.value)
    };

    return (
        <>
        <form className="d-flex"  onSubmit={handleSubmit} >
            <input
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                 onChange={handleChange}
            />
            <button variant="outline-success">Search</button>

        </form>
        <ul className={s.shoesGrid}>
            {searchShoe.map(shoe => <ShoesCard shoe={shoe}/>)}
        </ul>
        </>


    );
}

export default Search;