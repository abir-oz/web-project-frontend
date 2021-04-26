import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Header';

const Review = () => {


    
    const { register, handleSubmit} = useForm();
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    const url = 'https://still-mountain-18271.herokuapp.com/addReview';

    const onSubmit = data => {

        const newReview = {
            name: data.name,
            company: data.company,
            description: data.description,
            image: user.image
        }

        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        }).then(response => console.log(response))

    }



    return (
        <>
        <Header name={'Review'}/>
            <div className="row bg-light w-75 mx-auto p-5 h1001">
                <div className="bg-white rounded-3 shadow m-3">
                    <form className="form m-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control mb-3" type="text" placeholder="Your name"
                            {
                            ...register("name")
                            }
                        />
                        <input className="form-control mb-3" type="text" placeholder="Company or Organization Name"
                            {
                            ...register("company")
                            }
                        />
                        <textarea className="form-control mb-3" type="text" placeholder="Description"
                            {
                            ...register("description")
                            }
                        />


                        <input className="mb-3 form-control btn btn-danger" type="submit" />
                    </form>
                </div>
            </div >
        </>
    );
};

export default Review;