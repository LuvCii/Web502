import React from 'react';
import { isAuthenticate } from '../utils/localStorage';
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const { user: { role } } = isAuthenticate();
    if (!role) {
        return <Navigate to="/" />
    }
    return props.children
}

export default PrivateRouter