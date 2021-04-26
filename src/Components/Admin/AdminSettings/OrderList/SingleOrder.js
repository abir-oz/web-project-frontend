import React, { useEffect, useState } from 'react';

const SingleOrder = ({ id, name, email, service, payment, orderStatus }) => {



    const [currentStatus, setCurrentStatus] = useState("");

    useEffect(() => {
        setCurrentStatus(orderStatus);
    }, [orderStatus])


    let value1 = 'Pending';
    let value2 = 'Done';
    let value3 = 'Ongoing';

    if (value1 === orderStatus) {
        value1 = '';
    }
    if (value2 === orderStatus) {
        value2 = '';
    }
    if (value3 === orderStatus) {
        value3 = '';
    }

    const [items] = useState([
        { label: value1 || orderStatus, value: value1 || orderStatus },
        { label: value2 || orderStatus, value: value2 || orderStatus },
        { label: value3 || orderStatus, value: value3 || orderStatus }
    ]);


    const handleChange = (e) => {

        setCurrentStatus(e.currentTarget.value);
    }

    useEffect(() => {
        fetch(`https://still-mountain-18271.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderStatus: currentStatus })
        }).then(response => response.json())
            .then(data => console.log(data))
    }, [id,currentStatus])


    return (
        <>

            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {service}
                </td>
                <td>
                    {payment}
                </td>
                <td>
                    <select
                        value={currentStatus}
                        onChange={handleChange} className="form-select">
                        {
                            items.map(({ label, value }) =>
                                <option
                                    key={value}
                                    value={value}>
                                    {label}
                                </option>
                            )
                        }

                    </select>
                </td>
            </tr>

        </>
    );
};

export default SingleOrder;