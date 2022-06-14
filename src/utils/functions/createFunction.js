import React from "react";
import axios from "axios";

async function create(path) {
    const res = await axios
        .post(`http://localhost:8080/api${path}`, );
    return res.data;
}

export default create;