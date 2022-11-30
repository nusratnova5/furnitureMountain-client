import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Details from './Details';

const CategoryDetailsCard = () => {
    const categoryDetails = useLoaderData();

    const [booking, setBooking] = useState(null);
    
    return (   
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4'>
                {
                    categoryDetails?.map(categoryDetail => <Details
                        key={categoryDetail._id}
                        categoryDetail = {categoryDetail}
                        setBooking ={setBooking}
                    >
                    </Details>)
                }
            </div>
            <div>
                {
                    booking && 
                    <BookingModal
                        booking = {booking}
                        setBooking = {setBooking}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default CategoryDetailsCard;