import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/Authprovider';
import Advertisement from './Advertisement';

const Advertisements = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-side-nusratnova5.vercel.app/category_details?advertise=yes');
            const data = await res.json();
            return data;
        }
    });
    console.log(products)
    return (
        <div className='flex justify-center mt-10'>
            <div className='text-center w-3/4'>
                <h2 className='font-bold text-cyan-700 text-3xl'>AVAILABLE PRODUCTS</h2>

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 p-5 bg-cyan-700  rounded'>

                {
                    products.map(product => <Advertisement
                        key={product._id}
                        product={product}
                    ></Advertisement>
                    )

                }
            </div>
            </div>
        </div>
    );
};

export default Advertisements;