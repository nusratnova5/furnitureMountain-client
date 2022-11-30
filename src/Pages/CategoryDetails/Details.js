import React from 'react';

const Details = ({ categoryDetail, setBooking }) => {
    const { name } = categoryDetail;
    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <div onClick={() => setBooking(categoryDetail)} className="card-actions justify-end mx-auto">
                        <label htmlFor="booking-modal" className="btn">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;