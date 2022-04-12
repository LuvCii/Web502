import instance from "./instance";
import { Category } from '../types/category';
import { isAuthenticate } from '../utils/localStorage';

const user = isAuthenticate();


export const listCate = () => {
    const url = `/category`;
    return instance.get(url)
};

export const addCate = (category: Category) => {
    const url = `/category/${user?.user._id}`;
    return instance.post(url, category, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};

export const removeCate = (_id: number) => {
    const url = `/category/${user?.user._id}/${_id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};
export const readCate = (_id: any) => {
    const url = `/category/${_id}`;
    return instance.get(url);
}

export const readProductByCate = (_id: number | string | undefined) => {
    const url = `/categor/${_id}`;
    return instance.get(url);
}

export const updateCate = (category: Category) => {
    const url = `/category/${user?.user._id}/${category._id}`;
    return instance.patch(url, category, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}