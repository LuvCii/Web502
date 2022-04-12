import React, { useState } from 'react';
import { ProductType } from '../../../types/Product';
import { read, update } from '../../../api/product';
import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Category } from '../../../types/category';
import { listCate } from '../../../api/category';



type CateProps = {
    cate: Category[];
    name: string,
    _id: string
}

type ProductEditProps = {
    name: string
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    desc: string,
    category: string
}

const edit = (props: ProductEditProps) => {
    const [cate, setCate] = useState<CateProps[]>([])
    useEffect(() => {
        (async () => {
            const { data } = await listCate();
            setCate(data)
            // console.log(data);

        })()
    }, [])

    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, [id])

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.onUpdate(data);
    }
    return (
        <div>



            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full  md:px-20 pt-6">
                    <div className=" bg-white rounded-md px-6 py-10 w-4/5 mx-auto">
                        <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD Product</h1>
                        <div className="space-y-4">
                            <div className='text-left'>
                                <label className="text-lg font-medium">Name:</label> <br />
                                <input {...register('name')} type="text" placeholder="Name" id="title" className=" outline-none py-1 px-2 text-md border-2 rounded-md h-12 w-72" />
                            </div>
                            <div className='text-left'>
                                <label className="text-lg font-medium">Price:</label> <br />
                                <input {...register('price')} type="number" min='1' placeholder="Price" id="title" className=" outline-none py-1 px-2 text-md border-2 rounded-md h-12 w-72" />
                            </div>
                            <div>
                                <label className="block mb-2 text-lg text-left font-medium">Description:</label>
                                <textarea {...register('desc')} id="description" placeholder="whrite here.." className="w-full font-serif h-40 p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                            </div>




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
                            <div className="flex justify-center w-full">
                                <div className="mb-3 xl:w-full">
                                    <select {...register('category', { required: true })} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal    text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option selected>Danh mục</option>
                                        {cate.map(item => (

                                            <option value={item._id}>{item.name}</option>

                                        ))}
                                    </select>
                                    {/* {cate.map(item => (
                                        <p>{item.name}</p>
                                    ))} */}
                                </div>
                            </div>



                            <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">EDIT POST</button>
                        </div>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default edit