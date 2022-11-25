import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const LogIn = () => {
    const { register, handleSubmit } = useForm()
    const handleLogin=data=>{
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center bg-slate-200  '>
            <div className='w-96 p-7 bg-cyan-700 rounded'>
                <h2 className='text-4xl font-bold text-white mb-5'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">Enter Your Email</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email")} placeholder="" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">Enter Your Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password")} placeholder="" />
                    </div>
                    <div className='my-2'>
                    <select {...register("category", { required: true })}>
                        <option value="">Select...</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                    </select>
                    </div>
                    <input type="submit" value="SUBMIT" className='btn w-full my-3' />
                </form>
                <p className='text-center text-white'>New the website!!! <Link to='/signup' className='text-white font-bold'>Please SIGN UP</Link></p>
                <div className="divider"></div> 
                <input type="submit" value="GOOGLE" className='btn w-full my-3' />
            </div>
        </div>
    );
};

export default LogIn;