import React from 'react';

const Details = ({ categoryDetail, setBooking }) => {
    const { name,img,categoryName,location,resale_price,original_price,year } = categoryDetail;
    return (
        <div>
            <div className="card w-96 bg-cyan-700 mx-auto text-primary-content">
                <div className="card-body">
                    <img src={img} alt='' className='w-50 h-40'></img>
                    <h2 className="card-title mx-auto">Product:{name}</h2>
                    <h2 className="card-title mx-auto">Category name:{categoryName}</h2>
                    <h2 className="card-title mx-auto">Location:{location}</h2>
                    <h2 className="card-title mx-auto">Resale Price:{resale_price}</h2>
                    <h2 className="card-title mx-auto">Original Price:{original_price}</h2>
                    <h2 className="card-title mx-auto">year:{year}</h2>
                    <div onClick={() => setBooking(categoryDetail)} className="card-actions justify-end mx-auto">
                        <label htmlFor="booking-modal" className="btn">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;