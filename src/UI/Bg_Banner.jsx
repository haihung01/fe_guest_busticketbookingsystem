import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from "react-router-dom";
import './Bg_Banner.scss';
import { Link } from 'react-router-dom';

const Bg_Banner = () => {
    return (
        <section>
            <Container className='body-bg'>
                <Row>
                    <div className="navigation flex">
                        <div className="w-[876.2px] h-[79px] p-12 rounded-2xl mx-auto bg-slate-50 mt-10 shadow-2xl ">
                            <ul className='menu flex justify-center space-x-20 mt-[-35px]'>
                                <li className='nav_item'>
                                    <NavLink to='/'>
                                        <img
                                            src='https://www.svgrepo.com/show/489752/home.svg'
                                            className='w-[42px] h-[42px]'
                                        />
                                        Home
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/schedule'>
                                        <img
                                            src='https://www.svgrepo.com/show/513101/calendar.svg'
                                            className='w-[39px] h-[38px]'
                                        />
                                        Schedule
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <Link to='/news'>
                                        <img
                                            src='https://www.svgrepo.com/show/494016/news-publishing.svg'
                                            className='w-[39px] h-[38px]'
                                        />
                                        News
                                    </Link>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/bill'>
                                        <img
                                            src='https://www.svgrepo.com/show/259026/invoice-bill.svg'
                                            className='w-[39px] h-[38px]'
                                        />
                                        Bill
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/contact'>
                                        <img
                                            src='https://www.svgrepo.com/show/415825/contact-headset-communication.svg'
                                            className='w-[39px] h-[38px]'
                                        />
                                        Contact
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/about-us'>
                                        <img
                                            src='https://www.svgrepo.com/show/521200/people.svg'
                                            className='w-[39px] h-[38px]'
                                        />
                                        About us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='Widget-Section'>
                        <div className="w-[1200px] h-[321px] p-12 rounded-2xl mx-auto bg-slate-50 mt-[-45px] shadow-2xl ">
                        </div>
                    </div>
                    <div className="flex justify-center mt-9">
                        <div className="w-[216px] h-[44px] rounded-3xl flex bg-[#E3E3E3] mt-[-55px] justify-center shadow-2xl relative ">
                            <button className="font-sans w-[216px] h-[44px]">
                                Search trip
                            </button>
                        </div>
                    </div>

                </Row>
            </Container>
        </section>
    );
}

export default Bg_Banner;
