import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-side-nusratnova5.vercel.app/users?role=Buyer');
            const data = await res.json();
            return data;
        }
    });

    const handdleAdmin = id => {
        fetch(`https://resale-market-server-side-nusratnova5.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Admin Made');
                refetch();
            }
        })
    }

    const handleDelete = id => {
        fetch(`https://resale-market-server-side-nusratnova5.vercel.app/user/${id}`, {
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

    return (
        <div>
            <h2 className='text-3xl'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr className="hover">
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={()=> handdleAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><button onClick={()=> handleDelete(user._id)} className='btn btn-xs btn-error'>Delete</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;