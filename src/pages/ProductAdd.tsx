
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Input = { // kiểu dữ liệu của từng input
    name: string,
    price: number,
    desc: string
};

type ProductAddProps = {
    name: string,
    onAdd: (product: Input) => void
}

const ProductAdd = (props: ProductAddProps) => {
    // khai báo các component
    const { register, handleSubmit, formState: { errors } } = useForm<Input>()
    // sử dụng hook useNavigae để chuyển trang
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Input> = (dataInput) => {
        // console.log(dataInput) // 
        // call api
        props.onAdd(dataInput);
        // chuyển trang
        navigate("/product")
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