import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Schedule from '../pages/Schedule'
import News from '../pages/News'
import Contact from '../pages/Contact'
import AboutUs from '../pages/AboutUs'
import Bill from '../pages/Bill'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='home' element={<Home />} />
            <Route path='bill' element={<Bill />} />
            <Route path='schedule' element={<Schedule />} />
            <Route path='news' element={<News />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about-us' element={<AboutUs />} />
        </Routes>
    )
}

export default Routers;