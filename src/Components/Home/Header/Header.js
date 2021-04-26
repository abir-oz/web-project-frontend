import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    return (


        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="ms-5 navbar-brand" to="/">Kuthir Travelers</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto p-2">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#packages">Our Packages</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Contact Us</Link>
                            </li>
                            {
                               user?.email ?
                                    <li className="nav-item">
                                        <Link className="active nav-link ms-5" aria-current="page" to="/dashboard">Dashboard</Link>
                                    </li>
                                    :

                                    <li className="nav-item">
                                        <Link className="btn btn-danger text-white nav-link ms-5" aria-current="page" to="/login">Login</Link>
                                    </li>
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;