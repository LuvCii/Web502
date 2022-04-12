import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProductType } from '../../../types/Product'
import { useNavigate } from 'react-router-dom';



type ProductAddProps = {
    name: string
    onAdd: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    desc: string
}

const add = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const onSumbit: SubmitHandler<FormInputs> = (data) => {
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
                            <div className='text-left'>
                                <label className="text-lg font-medium">Price:</label> <br />
                                <input {...register('price', { required: true })} type="number" min='1' placeholder="Price" id="title" className=" outline-none py-1 px-2 text-md border-2 rounded-md h-12 w-72" />
                            </div>
                            <p className='text-left pl-4 text-red-500 text-base italic'>
                                {errors.price?.type === 'required' && "Vui lòng điền vào trường này"}
                            </p>
                            <div>
                                <label className="block mb-2 text-lg text-left font-medium">Description:</label>
                                <textarea {...register('desc', { required: true })} id="description" placeholder="whrite here.." className="w-full font-serif h-40 p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                            </div>
                            <p className='text-left pl-4 text-red-500 text-base italic'>
                                {errors.desc?.type === 'required' && "Vui lòng điền vào trường này"}
                            </p>




                            <div>
                                <label className="block text-left text-lg font-medium"> Cover photo </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>



                            <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default add