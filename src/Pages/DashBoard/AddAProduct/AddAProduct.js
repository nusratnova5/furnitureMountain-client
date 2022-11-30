import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/Authprovider';




const AddAProduct = () => {
    const { register, formState:{errors}, handleSubmit } = useForm();
    const {user}=useContext(AuthContext);
    const handleAddProduct = (data) => {
        if(data.categoryName === "Classroom Furniture"){
            data.categoryID = "6383cce39c0e5f62b3dc2057"
        };
        if(data.categoryName === "Living aroom Furniture"){
            data.categoryID = "6383cce39c0e5f62b3dc2056"
        }
        if(data.categoryName === "Bedroom Furniture"){
            data.categoryID = "6383cce39c0e5f62b3dc2055"
        };
        if(user){
            data.sellerEmail = user.email;
        }

        fetch('https://assignment-12-server-grsagor.vercel.app/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
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
        <div className='flex justify-center items-center bg-slate-200 p-10  '>
            <div className='w-96 p-7 bg-cyan-700 rounded '>
                <h2 className='text-4xl font-bold text-white mb-5'>ADD NEW PRODUCT</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">NAME</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name")} placeholder="" />
                
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">Category Name</span>
                        </label>
                        <select {...register("cat_name")} className="select select-bordered">
                            <option disabled selected>Choose Category</option>
                            <option>Classroom Furniture</option>
                            <option>Livingroom Furniture</option>
                            <option>Bedroom Furniture</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">IMAGE URL</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("img")} placeholder="" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">LOCATION</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("loc")} placeholder="" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">RESALE PRICE</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("re_price")} placeholder="" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">ORIGINAL PRICE</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("ori_price")} placeholder="" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">YEAR</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("year")} placeholder="" />
                    </div>
                    

                    <input type="submit" value="ADD" className='btn w-full my-3' />
                </form>
                
            </div>
        </div>
    );
};

export default AddAProduct;