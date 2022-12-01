import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-side-nusratnova5.vercel.app/category_details?sellerEmail=${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h2 className='text-3xl'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr className="hover">
                                <th>{product.name}</th>
                                <td>{product.re_price}</td>
                                <td>Advertise</td>
                                <td>Delete</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;