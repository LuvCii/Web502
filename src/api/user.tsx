import React from 'react';
import { User } from "../types/User"
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const user = isAuthenticate();

export const listCate = () => {
    const url = `user`;
    return instance.get(url)
}

export const removeUser = (_id: number) => {
    const url = `/user/${user?.user._id}/${_id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};

export const updateUser = (users: User) => {
    const url = `/user/${user?.user._id}/${users._id}`;
    return instance.patch(url, users, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}