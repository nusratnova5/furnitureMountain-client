import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';
import MyBooking from './MyBooking';

const MyBookings = () => {
    const {user} = useContext(AuthContext);

    const url = `https://resale-market-server-side-nusratnova5.vercel.app/bookings?email=${user?.email}`;

    const { data: mybookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(mybookings);
    return (
        <div>
            <h3 className='text-3xl'>My Bookings</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mybookings?.map(mybooking => <MyBooking
                                key = {mybooking._id}
                                mybooking = {mybooking}
                            ></MyBooking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;