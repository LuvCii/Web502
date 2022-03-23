import React from 'react'
import { ProductType } from '../types/product'
import { Link } from 'react-router-dom'


type ProductManagerProps = {
    products: ProductType[];
    onRemove: (id?: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
    return (
        <div>
            <table>
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.desc}</td>
                            <td>
                                <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                                <button onClick={() => props.onRemove(item.id)}>Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager