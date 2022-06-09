import React from "react";
import { useState } from 'react';

import { useNavigate } from "react-router";


const Search = () => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate()

    const handleSubmit = () => {
       
        navigate(`/Products/${searchText}`)
    };

    const handleChange = (e) => {
        setSearchText(e.target.value)
    };


    return (
        <>
            <form className="d-flex" onSubmit={handleSubmit} >
                <input
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                />
                <button variant="outline-success">Search</button>
            </form>    
        </>
    );
}

export default Search;