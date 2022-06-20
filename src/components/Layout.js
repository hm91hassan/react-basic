import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './page/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './page/Product';
function Layout() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' excet element={<Home />} />
                <Route path='/product/:id' excet element={<Product />} />

            </Routes>
            <Footer />
        </div>
    )
}

export default Layout
