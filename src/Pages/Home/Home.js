import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Advertisements from '../Advertisements/Advertisements';
import Banner from '../Banner/Banner';
import Category from '../CategoryDetails/Category';
import Extra from '../Extra/Extra';
import MyProduct from '../MyProduct/MyProduct';


const Home = () => {
  const categories = useLoaderData();
  return (
    <div className=''>
      <Banner></Banner>
      <div className='flex justify-center  rounded'>
        <div className='  bg-slate-200 w-3/4'>
          <div className=''>
            <div className='flex justify-center'>
              <h2 className='text-3xl font-bold text-cyan-700 my-3'>SHOP BY CATEGORY</h2>
            </div>
            <div className='text-cyan-700 m-10 font-bold'>
              {
                categories?.map(category => <Category
                  key={category._id}
                  category={category}
                ></Category>
                )
              }
            </div>

          </div>

        </div>
      </div>
      <Advertisements></Advertisements>
      <Extra></Extra>
    </div>
   
  );
};

export default Home;