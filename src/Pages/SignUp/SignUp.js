import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';

const SignUp = () => {
    const { register, formState:{errors}, handleSubmit } = useForm()
    const {createUser,updateUser}=useContext(AuthContext);
    const handleSignup=data=>{
        console.log(data);
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const userInfo ={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(err=>console.log(err));
        })
        .catch(error =>console.log(error));
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
                    <div className='my-2'>
                    <select {...register("category", { required: true })}>
                        <option value="">Select...</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
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