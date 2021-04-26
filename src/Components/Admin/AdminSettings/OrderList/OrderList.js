import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import SingleOrder from './SingleOrder';

const OrderList = () => {


    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
      async function getOrderList() {
          const response = await fetch("https://still-mountain-18271.herokuapp.com/orderList");
          const data = await response.json();

          setOrderList(data);
      }
      getOrderList()
      
    }, [])

    return (
        <>
            <Header name="Order List" />

            <div className="row bg-light w-75 mx-auto p-5 h1001" >
                <div className="table-responsive bg-white  rounded-3 shadow">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Package</th>
                                <th>Pay with</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                           {
                               orderList.map((order)=>
                               <SingleOrder 
                               key={order._id} 
                               id={order._id}
                               name={order.name}
                               email={order.email}
                               service={order.service}
                               payment={order.payment}
                               orderStatus ={order.orderStatus}  />
                               )
                           }

                        </tbody>

                    </table>
                </div>
            </div></>
    );
};

export default OrderList;