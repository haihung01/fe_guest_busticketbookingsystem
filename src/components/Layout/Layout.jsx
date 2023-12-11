import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import 'react-loading-skeleton/dist/skeleton.css'


const Layout = ({ Component, pageProps }) => {
    return <>
        <Header />
        <div>
            <Routers>
                <Component {...pageProps} />
            </Routers>
        </div>
        <div className='mt-10'>
            <Footer />
        </div>
    </>
}

export default Layout