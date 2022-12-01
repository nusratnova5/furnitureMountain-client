import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ order }) => {
    const { _id, img, productName, price } = order;
    return (
        <div>
            <div className="card glass lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <h2>{price}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/dashboard/paid/${_id}`}><button className="btn btn-primary">Pay</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;