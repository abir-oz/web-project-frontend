import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Header';


const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        // const email = data.email;
        fetch("https://still-mountain-18271.herokuapp.com/addAdmin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => console.log(response))
    }
    return (
        <>
            <Header name="Make Admin" />

            <div className="row bg-light w-75 mx-auto p-5 h1001" >
                <div className="bg-white rounded-3 shadow m-3">
                    <form className="form m-5" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email</label>
                        <input className="form-control rounded-0 mb-3 w-50" type="email" {...register("email", { required: 'true' })} id="email" />



                        {errors.email && <><span className="error">This field is required.</span><br /></>}

                        <input className=" rounded-0 btn btn-danger" type="submit" />
                    </form>
                </div>
            </div></>
    );
};

export default MakeAdmin;