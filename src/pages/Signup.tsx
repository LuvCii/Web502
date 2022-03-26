import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


type Input = {
    name: string,
    email: string,
    password: string
}
type UserAddProps = {
    onAddUser: (user: Input) => void
}

const Signup = (props: UserAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Input>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Input> = (dataInput) => {
        console.log(dataInput);
        // call api 
        props.onAddUser(dataInput);
        navigate("/signin")

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text"{...register('name')} placeholder='name' />
                <input type="text"{...register('email')} placeholder='email' />
                <input type="password"{...register('password')} placeholder='password' />
                <button>Đăng ký</button>
            </form>
        </div>
    )
}

export default Signup