import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';
import MyProduct from '../../MyProduct/MyProduct';
import toast from 'react-hot-toast';


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
    const handleDelete = id => {
        fetch(`https://resale-market-server-side-nusratnova5.vercel.app/product/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Deleted Successfully');
                refetch();
            }
        })
    }
   console.log(products)
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
                            products.map(product=><MyProduct
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                            ></MyProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;