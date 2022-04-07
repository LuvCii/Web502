import React from 'react';
import { User } from "../types/User"
import { isAuthenticate } from '../utils/localStorage';
import instance from './instance';

const user = isAuthenticate();

export const list = () => {
    const url = `user`;
    return instance.get(url)
}

export const remove = (_id: number) => {
    const url = `/user/${user?.user._id}/${_id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
};