import React, {useContext} from "react";
import { useParams } from "react-router-dom";
//import { Container, Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useFormik, Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios"
import s from "../styles/ProductView.module.css";
import capitalizeFirst from "../utils/functions/capitalizeFunction";
import { AuthContext } from '../context/AuthContext';
//import Button from "../commons/Button";

const AdminView = ({shoes, location}) => {
    /* const { isAdmin, superAdmin } = useContext(AuthContext); */
    const userStorage = JSON.parse(localStorage.getItem("user"));
    console.log(userStorage)
    console.log(useParams().id)


 
    
    return (
        <div>
            <div></div>
            <div>
                <Formik
                initialValues= {{
                    brand: "",
                    model: "",
                    size: "",
                    color: "",
                    stock: "",
                    price: "",
                    barcode: ""
                }}
                validationSchema= {Yup.object({
                    brand: Yup.string()
                            .required("Brand is required"),
                    model: Yup.string()
                            .required("Name is required")
                            .min(2, "Name must be 2 characters at minimum "),
                    size: Yup.number("Size must be a number")
                            .required("Size is required")
                            .integer("Size must be an integer")
                            .test(
                                'Is positive?', 
                                'ERROR: The number must be greater than 0!', 
                                (value) => value > 0
                            ),
                    color: Yup.string()
                            .required("Color is required")
                            .min(4, "Color must be 4 characters at minimum "),
                    stock: Yup.number("Stock must be a number")
                            .required("Stock is required")
                            .integer("Stock must be an integer"),
                    price:Yup.number("Price must be a number")
                            .required("Price is required"),
                    barcode:Yup.string()
                            .required("Barcode is required")

                })}
                onSubmit={(shoes) => {
                    axios.post('http://localhost:8080/api/products', {
                        brand: shoes.brand,
                        model: shoes.model,
                        size: shoes.size,
                        color: shoes.color,
                        stock: shoes.stock,
                        price: shoes.price,
                        barcode: shoes.barcode
                    })
                    .then(serverAnswer => {
                        alert(serverAnswer.data);
                        //navigate("/login");
                    })
                }}
                >

                <Form >
                    <h3>Brand</h3>
                    <Field name="brand" type="text"/>
                    <ErrorMessage name="brand" />

                    <h3>Name</h3>
                    <Field name="model" type="text"/> 
                    <ErrorMessage name="model" />
                    
                    <h3>Size</h3>
                    <Field name="size" type="number"/> 
                    <ErrorMessage name="size" />

                    <h3>Color</h3>
                    <Field name="color" type="text"/> 
                    <ErrorMessage name="color" />

                    <h3>Stock</h3>
                    <Field name="stock" type="number"/> 
                    <ErrorMessage name="stock" />

                    <h3>Price</h3>
                    <Field name="price" type="number"/> 
                    <ErrorMessage name="price" />
                    
                    <h3>Barcode</h3>
                    <Field name="barcode" type="text"/> 
                    <ErrorMessage name="barcode" /> <br/><br/>

                    <h3>Product photo</h3>
                    <Field name="photo" type="file"/> 
                    <ErrorMessage name="photo" /> <br/><br/>
                    
                    <button 
                        className={s.button} 
                        type="submit">
                        CONTINUE
                    </button>
                </Form>
            </Formik>
        </div>
    </div>
    )
}

export default AdminView;