import React from 'react'
import { ProductType } from '../types/product';

type ShowInforProps = {
    person: ProductType
}
const ShowInfor = (props: ShowInforProps) => {
    console.log(props);
    return (
        <div>ShowInfor</div>
    )
}
export default ShowInfor

