import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, _id } = category;
    console.log(category)
    return (
        <>
        
        <div className=''>
            
            <div className='  '>
                <div className='   '>
                    <Link to={`/card/${_id}`}>{name}</Link>
                </div>
            </div>
        </div>
        </>
        

    );
};

export default Category;