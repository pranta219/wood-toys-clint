import React from 'react';
import { useForm } from "react-hook-form"
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://warm-citadel-87543.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };


    return (

        <div className="container mx-auto py-28">
            <div className="flex justify-center items-center h-screen w-full ">
                <div className="w-2/3 bg- rounded shadow-2xl p-8 m-4">
                    <PageTitle title="Add Toy"></PageTitle>
                    <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add Toys</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" for="name" required="">Toys Name</label>
                            <input {...register('name', { required: true, maxLength: 20 })} className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" /></div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" for="price">Price</label>
                            <input {...register('price')} className="border py-2 px-3 text-grey-800" type="text" name="price" id="price" /></div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" for="img">Image Link</label>
                            <input {...register('img')} className="border py-2 px-3 text-grey-800" type="text" name="img" id="img" /></div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" for="name" required="">Supplier Name</label>
                            <input {...register('name', { required: true, maxLength: 20 })} className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" /></div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" for="description">Description</label>
                            <textarea {...register('text')} className="border py-2 px-3 text-grey-800" type="description" name="description" id="description"></textarea></div>
                        <button className="block bg-blue-800 hover:bg-indigo-600 text-white uppercase text-lg mx-auto p-2 rounded" type="submit">Add Toy</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;