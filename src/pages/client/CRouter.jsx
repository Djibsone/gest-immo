import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CLayout from './CLayout';
import Home from './Home';
import Properties from './Properties';
import Error from '../../components/Error';
import PropertyDetail from './PropertyDetail';
import Faq from './Faq';

const CRouter = () => {
    return (
        <Routes>
            <Route element={<CLayout />}>
                <Route index element={<Home />} />
                <Route path='/properties' element={<Properties />} />
                <Route path='/property/:id' element={<PropertyDetail />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    )
}

export default CRouter;
