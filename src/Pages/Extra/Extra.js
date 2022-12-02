import React from 'react';
import img from '../Extra/extra.jpg'

const Extra = () => {
    return (
        <div className='flex justify-center p-5'>
            <div className="card lg:card-side bg-slate-200 shadow-xl items-center w-3/4  ">
                <figure><img src={img} alt="Album" className='w-96' /></figure>
                <div className="card-body w-3/4 ">
                    <h2 className="card-title text-3xl text-cyan-700">Why choose us?</h2>
                    <p className='text-xl text-cyan-700'>We are here to provide you with exceptional customer service whenever you need us...before, during and after the sale. We're dedicated to giving you the best service and products possible each and every time. Your satisfaction is always our goal.</p>
                </div>
            </div>
        </div>
    );
};

export default Extra;