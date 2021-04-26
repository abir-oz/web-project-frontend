import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SingleBooking from './SingleBooking';


const BookingList = () => {

    const [bookingList, setBookingList] = useState([]);
    const user = JSON.parse(localStorage.getItem('loggedInUser'));



    useEffect(() => {
        async function getBookingList() {
            const response = await fetch("https://still-mountain-18271.herokuapp.com/bookingList/" + user.email);
            const data = await response.json();

            setBookingList(data);
        }
        getBookingList()

    }, [user.email])

    console.log(bookingList)

    return (
        <>
            <Header name={'Booking List'} />
            <div className="row bg-light w-100 mx-auto p-3 h1001">
                {

                    bookingList.map(booking =>
                       <SingleBooking 
                       key={booking._id}
                       service={booking.service}
                       price={booking.price}
                       orderStatus={booking.orderStatus}
                       
                       />
                    )

                }
            </div>
        </>
    );
};

export default BookingList;