import React from 'react'
import { Product } from '../types/product'
type ShowInforProps = {
    name: String;
    age: Number;
    person: {
        name: String;
    }
};
const ShowInfor = (props: ShowInforProps) => {
    console.log(props);
    return (
        <div>ShowInfor</div>
    )
}
export default ShowInfor

