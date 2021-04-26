import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Header';


const AddPackages = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const url = 'https://still-mountain-18271.herokuapp.com/addPackages';

    const [imageUrl, setImageUrl] = useState(null);

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);

        const imageData = new FormData();

        imageData.set('key', 'fc65f105fe3cf15bf6e9b680f2832c19');
        imageData.append('image', event.target.files[0]);

        axios.post("https://api.imgbb.com/1/upload", imageData)
            .then(response => {
                setImageUrl(response.data.data?.display_url);
            }).catch(err => {
                console.log(err);
            })
    }



    const onSubmit = data => {

        const newPackages = {
            name: data.title,
            price: data.price,
            image: imageUrl
        }

        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPackages)
        }).then(response => console.log(response))

    }



    return (
        <>
            <Header name={"Add Packages"} />

            <div className="row bg-light w-75 mx-auto p-5 h1001" >
                <div className="bg-white rounded-3 shadow m-3">
                    <form className="form m-5" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="title">Package Title</label>
                        <input className="mb-3 form-control"  {...register("title", { required: 'true' })} id="title" />
                        <label htmlFor="Price">Package Price</label>
                        <input type="number" className="mb-3 form-control"  {...register("price", { required: 'true' })} id="price" />
                        {errors.title && <span>This filed is required</span>}

                        <label htmlFor="image">Destination Image</label>
                        <br />

                        <input className="mb-3 form-control" type="file" onChange={handleImageUpload} id="image"></input>

                        <input className="mb-3 form-control btn btn-danger" type="submit" />
                    </form>
                </div>
            </div >
        </>
    );
};

export default AddPackages;