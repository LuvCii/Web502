import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Input = { // kiểu dữ liệu của từng input
    name: String,
    price: number,
    desc: String
};

type Props = {}

const ProductAdd = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>()
    const onSubmit: SubmitHandler<Input> = (dataInput) => {
        console.log(dataInput); // {name, price, desc}
        // call api
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')} placeholder="Tên sản phẩm" />
                <input type="number" {...register('price')} placeholder="Giá sản phẩm" />
                <input type="text" {...register('desc')} placeholder="Mô tả" />
                <button>Thêm</button>
            </form>
        </div>
    )
}

export default ProductAdd