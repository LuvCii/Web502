import instance from "./instance";
import Product from '../../.history/src/pages/ProductPage_20220316100837';
export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const add = (product: any) => {
    const url = `/products`;
    return instance.post(url, product);
}