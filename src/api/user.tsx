import instance from "./instance";

// export const getAll = () => {
//     const url = `users`;
//     return instance.get(url)
// }
export const signup = (user: any) => {
    const url = `/signup`;
    return instance.post(url, user)
}