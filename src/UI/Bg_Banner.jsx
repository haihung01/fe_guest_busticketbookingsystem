import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './Bg_Banner.scss';
import { Col, Container, Row } from 'reactstrap';

const Bg_Banner = () => {
    return (
        <section>
            <Container className='body-bg'>
                <Row>
                    <Col className="navigation flex">
                        <div className="w-[876.2px] h-[79px] p-12 rounded-2xl mx-auto bg-slate-50 mt-10 shadow-2xl ">
                            <ul className='menu flex justify-center space-x-20 mt-[-35px]'>
                                <li className='nav_item'>
                                    <NavLink to='/'>
                                        <img
                                            src='https://www.svgrepo.com/show/489752/home.svg'
                                            className='w-[42px] h-[42px]'
                                            alt='Home Icon'
                                        />
                                        Home
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/schedule'>
                                        <img
                                            src='https://www.svgrepo.com/show/513101/calendar.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='Schedule Icon'
                                        />
                                        Schedule
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <Link to='/news'>
                                        <img
                                            src='https://www.svgrepo.com/show/494016/news-publishing.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='News Icon'
                                        />
                                        News
                                    </Link>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/bill'>
                                        <img
                                            src='https://www.svgrepo.com/show/259026/invoice-bill.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='Bill Icon'
                                        />
                                        Bill
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/contact'>
                                        <img
                                            src='https://www.svgrepo.com/show/415825/contact-headset-communication.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='Contact Icon'
                                        />
                                        Contact
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/about-us'>
                                        <img
                                            src='https://www.svgrepo.com/show/521200/people.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='About Us Icon'
                                        />
                                        About us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col className='Widget-Section'>
                        <div className="w-[1200px] h-[321px] p-12 rounded-2xl mx-auto bg-slate-50 mt-[-40px] shadow-2xl ">
                            <section>
                                <Container>
                                    <Row>
                                        <Col className='flex align-items-center gap-28  mx-auto w-[876.2px] round-checkbox mt-3'>
                                            <div>
                                                <input type="checkbox" id="myCheck1" />
                                                <label for="myCheck1">Một chiều</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="myCheck2" />
                                                <label for="myCheck2">Khứ hồi</label>
                                            </div>
                                        </Col>

                                        <Col className=' align-items-center  mx-auto w-[798px] h-[200px]'>
                                            <div className='mt-9 flex  gap-4'>
                                                <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                    <input className='' placeholder='Chọn điểm đi'></input>
                                                </div>
                                                <div className=' border border-gray-300 flex rounded-lg  w-[252px] h-[67px]'>
                                                    <input className='' placeholder='Chọn điểm đến'></input>
                                                </div>
                                                <div className=' border border-gray-300 flex rounded-lg  w-[252px] h-[67px]'>
                                                    <input className=''></input>
                                                </div>
                                            </div>

                                            <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px] mt-10'>
                                                <input className='' placeholder=''></input>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                        </div>
                    </Col>

                    <Col className="flex justify-center mt-9">
                        <div className="w-[216px] h-[44px] rounded-3xl flex bg-[#E3E3E3] mt-[-55px] justify-center shadow-2xl relative ">
                            <button className="font-sans w-[216px] h-[44px]">
                                Tìm chuyến xe
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Bg_Banner;
