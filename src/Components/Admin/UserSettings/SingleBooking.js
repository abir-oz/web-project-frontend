import React from 'react';

const SingleBooking = ({service, price, orderStatus}) => {

    let bgColor;

    if(orderStatus === 'Pending'){
        bgColor = 'red';
    }
    if(orderStatus === 'Done'){
        bgColor = 'green';
    }
    if(orderStatus === 'Ongoing'){
        bgColor = 'yellow';
    }

    return (
        <div className="col-md-6">
            <div className="mt-2 rounded-3 shadow  bg-white p-3">
                <h6 className="float-start">You have booked <span className="text-danger">{service}</span> tour package.</h6>
                <span style={{backgroundColor : bgColor}} className="p-2 float-end rounded text-white border-0">{orderStatus}</span>
                <div className="clearfix"></div>
                <p className="mt-4">
                    The Package Price is &#2547;{price}
            </p>
            </div>
        </div>
    );
};

export default SingleBooking;