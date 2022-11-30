import React from 'react';

const MyBooking = ({mybooking}) => {
    const {productName, price} = mybooking;
    return (
        <tr className='hover'>
            <th>{productName}</th>
            <tr>{price}</tr>
        </tr>
    );
};

export default MyBooking;