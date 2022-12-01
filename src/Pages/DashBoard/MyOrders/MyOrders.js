import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-side-nusratnova5.vercel.app/bookings?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h2 className='text-3xl'>My Orders</h2>
            {
                orders?.map(order => <MyOrder
                    key={order._id}
                    order = {order}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;