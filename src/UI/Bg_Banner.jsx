import React from 'react'
import { Col, Container, NavLink, Row } from 'reactstrap'
import './Bg_Banner.scss'

const Bg_Banner = () => {
    return (
        <section>
            <Container className='body-bg'>
                <Row>
                    <div className="navigation flex">
                        <div className="w-[876.2px] h-[79px] p-12 rounded-2xl mx-auto bg-slate-50 mt-10 space-x-10 ">
                            <ul className='menu flex justify-center'>
                                <li className='nav_item'>
                                    <NavLink to='home'>Home</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='home'>Schedule</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='home'>News</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='home'>Bill</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='home'>Contact</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='home'>About us</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='2'></div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default Bg_Banner;
