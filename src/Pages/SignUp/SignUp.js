import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, formState:{errors}, handleSubmit } = useForm()
    const {createUser,updateUser}=useContext(AuthContext);
    const [createUserEmail, setCreatedUserEmail] =useState('');
    const navigate = useNavigate();

    const [token] = useToken(createUserEmail);

    if(token){
        navigate('/');
    }

    const handleSignup=data=>{
        console.log(data);
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully');
            const userInfo ={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{
                saveUsers(data?.name, data?.email, data?.role)
            })
            .catch(err=>console.log(err));
        })
        .catch(error =>console.log(error));
    }

    const saveUsers = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://resale-market-server-side-nusratnova5.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center bg-slate-200  '>
            <div className='w-96 p-7 bg-cyan-700 rounded'>
                <h2 className='text-4xl font-bold text-white mb-5'>SIGN UP</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">Enter Your Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name")} placeholder="" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">Enter Your Email</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email",{required:"Email is required"})} placeholder="" />
                        {errors.email && <p role="alert" className='text-red-700 m-2'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">Enter Your Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password",{required:true})} placeholder="" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Are you a seller or buyer?</span>
                        </label>
                        <select {...register("role")} className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>
                    <input type="submit" value="SUBMIT" className='btn w-full my-3' />
                </form>
                <p className='text-center text-white'>Already Registered!!! <Link to='/login' className='text-white font-bold'>Please Log IN</Link></p>
            </div>
        </div>
    );
};

export default SignUp;