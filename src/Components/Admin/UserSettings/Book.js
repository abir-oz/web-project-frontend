import React from 'react';
import { useForm } from 'react-hook-form';
import {useParams } from 'react-router';

import Header from '../Header';


const Book = () => {

    const user = JSON.parse(localStorage.getItem('loggedInUser'));



    const { details } = useParams();

    const price = details.split('+')[1];
    const packageName = details.split('+')[0];

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        data.orderStatus = 'Pending';
        data.price = price;

        fetch("https://still-mountain-18271.herokuapp.com/addBooking", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    }





    return (

        <>
            <Header name={'Booking'} />

            <div className="row bg-light w-75 mx-auto p-5 h1001">
                <div className="bg-white rounded-3 shadow m-3">
                    <form className="form m-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control mb-3" type="text"
                            defaultValue={user.name}
                            {
                            ...register("name")
                            }
                        />
                        <input className="form-control mb-3" type="email" defaultValue={user.email}
                            {
                            ...register("email")
                            }
                        />
                        <input className="form-control mb-3" type="text" defaultValue={packageName}
                            {
                            ...register("service")
                            }
                        />
                        <input className="mb-3" value="Credit Card" type="radio" id="creditCard"
                            {
                            ...register("payment")
                            }
                        />
                        <label className="ms-2" htmlFor="creditCard">
                            Credit Card
                </label>
                        <input className="ms-5 mb-3" type="radio" value="Paypal" id="paypal"
                            {
                            ...register("payment")
                            }
                        />
                        <label className="ms-2" htmlFor="paypal">
                            Paypal
                </label>
                        <p>You will be Charged &#2547;{price} for the selected package.</p>
                        <input className="mb-3 form-control btn btn-danger"
                            value="Pay"
                            type="submit" />
                    </form>
                </div>
            </div >
        </>
    );
};

export default Book;