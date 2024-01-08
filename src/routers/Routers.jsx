import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Schedule from '../pages/Schedule'
import News from '../pages/News'
import Contact from '../pages/Contact'
import AboutUs from '../pages/AboutUs'
import Bill from '../pages/Bill'
import ProductCart from '../UI/product-cart/ProductCart'
import Schedule2 from '../pages/Schedule2'
import ProductCart2 from '../UI/product-cart/ProductCart2'
import Payment from '../UI/product-cart/payment/Payment'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='home' element={<Home />} />
            <Route path='bill' element={<Bill />} />
            <Route path='schedule/' element={<Schedule />} />
            <Route path='news' element={<News />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='product-cart' element={<ProductCart />} />
            <Route path='schedule2' element={<Schedule2 />} />
            <Route path='product-cart2' element={<ProductCart2 />} />
            <Route path='payment' element={<Payment />} />


        </Routes>

    )
}

export default Routers;