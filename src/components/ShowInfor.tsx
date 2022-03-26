import React from 'react'
import { ProductType } from '../types/product';

type ShowInforProps = {
    children: JSX.Element
}
const ShowInfor = (props: ShowInforProps) => {
    console.log(props);
    return (
        <div>{props.children}</div>
    )
}
export default ShowInfor

