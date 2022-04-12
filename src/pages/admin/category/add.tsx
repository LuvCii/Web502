import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { Category } from '../../../types/category';



type ProductAddProps = {
    name: string
    onAdd: (product: Category) => void
}
type FormInputs = {
    name: string,
    price: number,
    desc: string,
    category: string
}

const add = (props: ProductAddProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const onSumbit: SubmitHandler<FormInputs> = (data) => {
        console.log(data)
        props.onAdd(data);
    }
    return (
        <div>add


            <form onSubmit={handleSubmit(onSumbit)}>
                <div className="w-full  md:px-20 pt-6">
                    <div className=" bg-white rounded-md px-6 py-10 w-4/5 mx-auto">
                        <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD Product</h1>
                        <div className="space-y-4">
                            <div className='text-left'>
                                <label className="text-lg font-medium">Name:</label> <br />
                                <input {...register('name', { required: true, minLength: 3 })} type="text" placeholder="Name" id="title" className=" outline-none py-1 px-2 text-md border-2 rounded-md h-12 w-72" />
                            </div>
                            <p className='text-left pl-4 text-red-500 text-base italic'>
                                {errors.name?.type === 'required' && "Vui lòng điền vào trường này"}
                                {errors.name?.type === 'minLength' && "Vui lòng nhập trên 3 kí tự"}

                            </p>

                            <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD CATEGORY</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default add