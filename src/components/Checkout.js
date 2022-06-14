import React from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Checkout = () => {
    const navigate = new useNavigate();

    const [checkoutInput, setCheckoutInput] = useState({});

    const handleCheckout = () => {
        axios
            .put('/orders/checkout', {
                name: "",
                surname: "",
                email: "",
                dni: "",
                address: "",
                town_city: "",
                country: "",
                postal_zip_code: "",
            })
            .then((checkout) => {
                console.log(checkout);
                navigate('/account');
            })
            .catch((err) => console.log(err));

        axios
            .post('/orders/add', {
                orderNumber: null,
                products_buy: [],
                price_final: 0,
                //userNumber: user.data[0].id,
                fullfilled: false,
                rejected: false,
            });

    };



    return (
        <div>
            <h3>Costumer Info</h3>
            <Form.Input
                fluid
                name="name"
                label='First Name'
                placeholder='John'
                onChange={handleCheckout}
            />
            <Form.Input
                fluid
                name='surname'
                label='Last name'
                placeholder='Smith'
                onChange={handleCheckout}
            />
            <Form.Input
                fluid
                name='email'
                label='Email'
                placeholder='xyz@example.com'
                type='email'
                onChange={handleCheckout}
            />
            <h3>Shipping</h3>
            <Form.Group>
                <Form.Input
                    width={10}
                    name='address'
                    label='Address'
                    placeholder='122 Example St'
                    onChange={handleCheckout}
                />

            </Form.Group>

            <Form.Group>
                <Form.Input
                    width={6}
                    name='town_city'
                    label='Town/City'
                    placeholder='Las Vegas'
                    onChange={handleCheckout}
                />
                <Form.Input
                    width={6}
                    name='country'
                    label='Country'
                    placeholder='Argentina'
                    onChange={handleCheckout}

                />
                <Form.Input
                    width={4}
                    type='number'
                    name='postal_zip_code'
                    label='Zip/Postal'
                    placeholder='00000'
                    onChange={handleCheckout}
                />
            </Form.Group>

            <h3>Payment</h3>
            <Form.Group className='payment-radio'>
                <input
                    name='gateway'
                    type='radio'
                    value='stripe'
                />
                <label htmlFor="stripe">Credit Card</label>
            </Form.Group>
            <Form.Group>
                <Form.Input
                    name='number'
                    type='number'
                    label='Credit Card Number'
                    placeholder='0000111100001111'
                    
                />
                <Form.Input
                    name='postal_billing_zip_code'
                    type='number'
                    max='99999'
                    label='Billing Zip'
                    placeholder='Enter Billing Zip Code'
                />
            </Form.Group>
            <Form.Group>
                <Form.Input
                    width={3}
                    name='expiry_month'
                    label='Month'
                    placeholder='Enter expiry month'
                    
                />
                <Form.Input
                    width={3}
                    name='expiry_year'
                    label='Year'
                    placeholder='Enter expiry year'
                    
                />
                <Form.Input
                    width={3}
                    name='cvc'
                    type='number'
                    label='CVC'
                    placeholder='123'
                    
                />
            </Form.Group>
        </div>
    )
}

export default Checkout