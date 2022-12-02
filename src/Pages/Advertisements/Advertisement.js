import React from 'react';

const Advertisement = ({product}) => {
    const { name,img,cat_name,re_price,ori_price } = product;
    return (
        <div className=''>
            
             <div className="card w-80 bg-slate-100 mx-auto text-primary-content">
                
                <div className="card-body">
                    <img src={img} alt='' className='w-50 h-40'></img>
                    <h2 className="card-title text-cyan-700 font-bold mx-auto">Product:{name}</h2>
                    <h2 className="card-title text-cyan-700 text-left">Category name:{cat_name}</h2>
                    <h2 className="card-title text-cyan-700 text-left">Resale Price:{re_price}</h2>
                    <h2 className="card-title text-cyan-700 text-left">Original Price:{ori_price}</h2>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;