import React from 'react';

const Header = ({ name }) => {
    
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    return (


        <div className="row bg-white">
            <div className="col-md-6 text-center text-md-start my-4">
                <div className="ms-5">
                    <h5>{name}</h5>
                </div>
            </div>
            <div className="col-md-6 text-center text-md-end my-4">
                <div className="ms-5 me-lg-5">
                   <h5>{user.name}</h5>
                        </div>
            </div>
        </div>
    );
};

export default Header;