import instance from "./instance";
import { ProductType } from "../types/Product";
import { isAuthenticate } from '../utils/localStorage';

const user = isAuthenticate();
export const list = () => {
    const url = `/products`;
    return instance.get(url)
};
export const add = (product: ProductType) => {
    const url = `/product/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};

export const remove = (_id: number) => {
    const url = `/product/${user?.user._id}/${_id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const read = (_id: any) => {
    const url = `/products/${_id}`;
    return instance.get(url);
}
export const update = (product: ProductType) => {
    const url = `/product/${user?.user._id}/${product._id}`;
    return instance.patch(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}