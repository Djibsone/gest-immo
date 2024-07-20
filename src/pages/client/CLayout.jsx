import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const CLayout = () => {
    return (
        <div className='bg-gray-100 w-screen h-screen overflow-hidden'>
            <Navbar />
            <div className='text-2xl overflow-auto h-screen pb-4 p-2 py-20'>
                <Outlet />
            </div>
        </div>
    )
}

export default CLayout;
