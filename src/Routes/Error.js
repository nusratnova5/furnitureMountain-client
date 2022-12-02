import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Routes/error.webp'

const Error = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <div className='p-5 text-center'>
                    <h2 className='text-red-700 text-5xl'>Server Not Found</h2>
                    <Link to='/' className='text-cyan-700 text-2xl font-bold'>Go to HOME</Link>
                </div>
                <div>
                    <img src={img} alt='' className='w-96 h-96'></img>
                </div>
            </div>

        </div>
    );
};

export default Error;