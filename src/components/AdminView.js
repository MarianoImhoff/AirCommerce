import React, {useContext} from "react";
import { useParams } from "react-router-dom";
//import { Container, Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios"
import s from "../styles/AdminView.module.css";
//import capitalizeFirst from "../utils/functions/capitalizeFunction";
import { AuthContext } from '../context/AuthContext';
//import Button from "../commons/Button";

const AdminView = ({shoes, location}) => {
    const navigate = useNavigate();
    /* const { isAdmin, superAdmin } = useContext(AuthContext); */
    const userStorage = JSON.parse(localStorage.getItem("user"));
    //console.log(userStorage)
    //console.log(useParams().id)

    const supportedFormats =["image/jpg"];

    
    return (
        <div className={s.container}>
           
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
                            .required("Required"),
                    model: Yup.string()
                            .required("Required")
                            .min(2, "Name must be 2 characters at minimum "),
                    size: Yup.number("Size must be a number")
                            .required("Required")
                            .integer("Size must be an integer")
                            .test(
                                'Is positive?', 
                                'ERROR: The number must be greater than 0!', 
                                (value) => value > 0
                            ),
                    color: Yup.string()
                            .required("Required")
                            .min(4, "Color must be 4 characters at minimum "),
                    stock: Yup.number("Stock must be a number")
                            .required("Required")
                            .integer("Stock must be an integer"),
                    price:Yup.number("Price must be a number")
                            .required("Required"),
                    barcode:Yup.number()
                            .required("Required"),
                    photo:Yup.mixed()
                            .required("Required")
/*                             .test("type", 
                                "Only the following formats are accepted: .jpeg, .jpg", 
                                value => value === null || (value && supportedFormats.includes(value[0]?.type))
                            ) */
                })}
                onSubmit={values => {
                    console.log(values)
                        console.log(values.brand)
                    axios.post('/products', {
                        brand: values.brand,
                        model: values.model,
                        size: values.size,
                        color: values.color,
                        stock: values.stock,
                        price: values.price,
                        barcode: values.barcode
                    })
                    .then(serverAnswer => {
                        console.log(serverAnswer.data);
                        //navigate(`/${serverAnswer.data.id}`);
                    })
                }}
                >

                <Form className={s.form}>
                    <div>Brand</div>
                    <Field className={s.input} name="brand" type="text"/> <br/>
                    <ErrorMessage className={s.error} name="brand" /> <br/>

                    <div>Name</div>
                    <Field className={s.input} name="model" type="text"/> <br/>
                    <ErrorMessage name="model" /> <br/>
                    
                    <div>Size</div>
                    <Field className={s.input} name="size" type="number"/> <br/>
                    <ErrorMessage name="size" /> <br/>

                    <div>Color</div>
                    <Field className={s.input} name="color" type="text"/> <br/>
                    <ErrorMessage name="color" /> <br/>

                    <div>Stock</div>
                    <Field className={s.input} name="stock" type="number"/> <br/> 
                    <ErrorMessage name="stock" /> <br/>

                    <div>Price</div>
                    <Field className={s.input} name="price" type="number"/> <br/>
                    <ErrorMessage name="price" /> <br/>
                    
                    <div>Barcode</div>
                    <Field className={s.input} name="barcode" type="text"/> <br/>
                    <ErrorMessage name="barcode" /> <br/>

                    <div>Photo</div>
                    <Field name="photo" type="file"/> 
                    <ErrorMessage name="photo" /> <br/><br/>
                    
                    <button className={s.button} 
                        type="submit">
                        SUBMIT
                    </button>
                </Form>
            </Formik>
    
    </div>
    )
}

export default AdminView;