import React from 'react';

const MyProduct = ({product,handleDelete,addAdvertise}) => {
   
        
    return (
        
            
                        <tr className="hover">
                                <th>{product?.name}</th>
                                <td>{product?.re_price}</td>
                                <td>Advertise</td>
                                <td><button onClick={()=> handleDelete(product._id)} className='btn btn-xs btn-error'>Delete</button></td>
                                <td><button onClick={()=>addAdvertise(product._id)} className='btn btn-xs btn-primary'>Advertise</button></td>
                        </tr>

        
    );
};

export default MyProduct;