import React from 'react';
import toast from 'react-hot-toast';

const MyProduct = ({product}) => {
    const addAdvertise = () => {
        console.log(product)

        fetch('https://resale-market-server-side-nusratnova5.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data?.acknowledged){
                    toast.success('Product Added')
                }
            })

        }
    return (
        
            
                        <tr className="hover">
                                <th>{product?.name}</th>
                                <td>{product?.re_price}</td>
                                <td>Advertise</td>
                                <td>Delete</td>
                                <td><button onClick={addAdvertise} className='btn btn-xs btn-primary'>Advertise</button></td>
                        </tr>

        
    );
};

export default MyProduct;