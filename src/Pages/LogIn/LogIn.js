import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import useToken from '../../hooks/useToken';
import { useEffect } from 'react';

const LogIn = () => {
    const {LogIn,googleLogIn}=useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const [loginUserEmail, setLogInUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    
    useEffect(() => {
        if(token){
            navigate(from, {replace: true});
            console.log(token);
         }
     
    },[token]);

    
    const { register, formState:{errors}, handleSubmit } = useForm();
    const handleLogin=data=>{
        LogIn(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setLogInUserEmail(data.email);
        })
        .catch(error =>{
            console.log(error)
        });
    }

    const handleGoogleLogIn = () => {
        googleLogIn(googleProvider)
        .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace: true})
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center bg-slate-200  '>
            <div className='w-96 p-7 bg-cyan-700 rounded'>
                <h2 className='text-4xl font-bold text-white mb-5'>SIGN IN</h2>
                <form onSubmit={  handleSubmit(handleLogin) }>                   
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

                    <input type="submit" value="Login" className='btn w-full my-3' />
                </form>
                <p className='text-center text-white'>New the website!!! <Link to='/register' className='text-white font-bold'>Please SIGN UP</Link></p>
                <div className="divider">Or</div> 
                <button onClick={handleGoogleLogIn} className='btn w-full my-3' >Google</button>
            </div>
        </div>
    );
};

export default LogIn;