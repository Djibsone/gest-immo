import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AthLayout from './AthLayout';
import Error from '../../components/Error';
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import Reset from './Reset';

const AthRouter = () => {
    return (
        <Routes>
            <Route element={<AthLayout />}>
                <Route index element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<Forgot />} />
                <Route path='/reset-password' element={<Reset />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    )
}

export default AthRouter;
