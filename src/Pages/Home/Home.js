import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../CategoryDetails/Category';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div className=''>
           {
              categories?.map(category => <Category
                key={category._id}
                category={category}
                ></Category>
              )
            }
        </div>
    );
};

export default Home;