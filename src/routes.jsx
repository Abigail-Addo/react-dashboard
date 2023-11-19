// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './Pages/Home';
import Customers from './Pages/Customers';
import Orders from './Pages/Orders';
import Products from './Pages/Products';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Dashboard />} /> */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
