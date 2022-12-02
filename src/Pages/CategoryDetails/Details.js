import React from 'react';

const Details = ({ categoryDetail, setBooking }) => {
    const { name,img,cat_name,loc,re_price,ori_price,year } = categoryDetail;
    return (
        <div className='p-5'>
            <div className="card w-96  bg-slate-200 mx-auto text-primary-content">
                <div className="card-body">
                    <img src={img} alt='' className='w-50 h-40'></img>
                    <h2 className="card-title mx-auto text-3xl text-cyan-700">Product: {name}</h2>
                    <h2 className="card-title text-cyan-700 ">Category name:{cat_name}</h2>
                    <h2 className="card-title text-cyan-700">Location:{loc}</h2>
                    <h2 className="card-title text-cyan-700 ">Resale Price:{re_price}</h2>
                    <h2 className="card-title text-cyan-700">Original Price:{ori_price}</h2>
                    <h2 className="card-title text-cyan-700">year:{year}</h2>
                    <div onClick={() => setBooking(categoryDetail)} className="card-actions justify-end mx-auto">
                        <label htmlFor="booking-modal" className="btn">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;