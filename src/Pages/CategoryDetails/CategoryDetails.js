import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetailsCard from './CategoryDetailsCard';

const CategoryDetails = () => {
    const categoryDetails = useLoaderData();
    console.log(categoryDetails)
    return (
        <div className=''>
           {
              categoryDetails.map(details => <CategoryDetailsCard
                key={details._id}
                details={details}
                ></CategoryDetailsCard>
              )
            }
        </div>
    );
};

export default CategoryDetails;