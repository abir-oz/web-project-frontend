import React, { useEffect } from 'react';
import './Dasboard.css';
import { Link, Route } from 'react-router-dom';
import AddServices from './AdminSettings/AddServices';
import AddPackages from './AdminSettings/AddPackages';
import Book from './UserSettings/Book';
import BookingList from './UserSettings/BookingList';
import MakeAdmin from './AdminSettings/MakeAdmin';
import OrderList from './AdminSettings/OrderList/OrderList';
import Review from './UserSettings/Review';
import { useState } from 'react';



const Dashboard = () => {

    const user = JSON.parse(localStorage.getItem('loggedInUser'));



    const [isAdmin, setIsAdmin] = useState(false);



    useEffect(() => {
        fetch("https://still-mountain-18271.herokuapp.com/isAdmin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));

    }, [user.email])
    return (
        <div className="row m-0 p-0 bg-light w-100 h-1001">
            <div className="col-md-3 bg-white">
                <div className="text-start  text-sm-center text-md-start">
                    <h2 className="mt-4 ms-5"><Link className="text-decoration-none text-dark" to="/home">Kuthir</Link></h2>

                    <ul className="services-option list-unstyled ms-5 mt-5">

                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <Link to="/makeAdmin">Make Admin</Link>
                                    </li>
                                    <li>
                                        <Link to="/addService">Add Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/orderList">Order List</Link>
                                    </li>
                                    <li>
                                        <Link to="/addPackages">Add Packages</Link>
                                    </li>



                                </> :

                                <>
                                    <li className="">
                                        <Link to="/book">Book</Link>
                                    </li>
                                    <li>
                                        <Link to="/bookingList">Booking List</Link>
                                    </li>
                                    <li>
                                        <Link to="/review">Review</Link>
                                    </li>
                                </>

                        }

                    </ul>
                </div>
            </div>
            <div className="col-md-9 h-1001">
                {

                    isAdmin ?
                        <>
                            <Route exact path="/dashboard">
                                <OrderList />
                            </Route>
                            <Route path="/addService">
                                <AddServices />
                            </Route>
                            <Route path="/addPackages">
                                <AddPackages />
                            </Route>
                            <Route path="/makeAdmin">
                                <MakeAdmin />
                            </Route>
                            <Route path="/orderList">
                                <OrderList />
                            </Route>
                        </>
                        :
                        <>
                            <Route path="/book/:details">
                                <Book />
                            </Route>
                            <Route exact path="/book">
                                <div className="container">
                                    <div className="row m-5 p-5 h-1001 text-danger">
                                        <h5 className="m-5 p-5 ">Please Select a package from homepage.</h5>
                                    </div>
                                </div>
                            </Route>
                            <Route path="/bookingList">
                                <BookingList />
                            </Route>
                            <Route exact path="/dashboard">
                                <BookingList />
                            </Route>

                            <Route path="/review">
                                <Review />
                            </Route>
                        </>}
            </div>


        </div>
    );
};

export default Dashboard;