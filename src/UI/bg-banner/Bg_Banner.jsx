import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import './Bg_Banner.scss';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import Data from '../../data/data.js'

const Bg_Banner = () => {
    const [isRoundTrip, setIsRoundTrip] = useState(false);

    const [moveSearchRecently, setMoveSearchRecently] = useState(false);

    const [diemDi, setDiemDi] = useState('');


    const toggleRoundTrip = () => {
        setIsRoundTrip(!isRoundTrip);
        setMoveSearchRecently(!isRoundTrip); // Dịch phải nếu là khứ hồi
    };
    return (
        <section>
            <Container className='body-bg'>
                <Row>
                    <Col className="navigation flex">
                        <div className="w-[876.2px] h-[79px] p-12 rounded-2xl mx-auto bg-slate-50 mt-10 shadow-2xl ">
                            <ul className='menu flex justify-center gap-[78px] mt-[-35px]'>
                                <li className='nav_item'>
                                    <NavLink to='/'>
                                        <img
                                            src='https://www.svgrepo.com/show/489752/home.svg'
                                            className='w-[42px] h-[42px]'
                                            alt='Home Icon'
                                        />
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/schedule'>
                                        <img
                                            src='https://www.svgrepo.com/show/513101/calendar.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='Schedule Icon'
                                        />
                                        Lịch trình
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <Link to='/news'>
                                        <img
                                            src='https://www.svgrepo.com/show/494016/news-publishing.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='News Icon'
                                        />
                                        Tin tức
                                    </Link>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/bill'>
                                        <img
                                            src='https://www.svgrepo.com/show/259026/invoice-bill.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='Bill Icon'
                                        />
                                        Hóa đơn
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/contact'>
                                        <img
                                            src='https://www.svgrepo.com/show/415825/contact-headset-communication.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='Contact Icon'
                                        />
                                        Liên hệ
                                    </NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='/about-us'>
                                        <img
                                            src='https://www.svgrepo.com/show/521200/people.svg'
                                            className='w-[39px] h-[38px]'
                                            alt='About Us Icon'
                                        />
                                        Về chúng tôi
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
                                        <Col className='flex align-items-center gap-28 mx-auto w-[876.2px] round-checkbox mt-3'>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    id="myCheck1"
                                                    checked={!isRoundTrip}
                                                    onChange={toggleRoundTrip}
                                                />
                                                <label
                                                    for="myCheck1"
                                                    className={!isRoundTrip ? 'selected' : ''}
                                                >
                                                    Một chiều
                                                </label>
                                            </div>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    id="myCheck2"
                                                    checked={isRoundTrip}
                                                    onChange={toggleRoundTrip}
                                                />
                                                <label
                                                    for="myCheck2"
                                                    className={isRoundTrip ? 'selected' : ''}
                                                >
                                                    Khứ hồi
                                                </label>
                                            </div>
                                        </Col>
                                        <Col className='mx-auto w-[1100px] h-[200px] '>
                                            <div className='mt-3 flex gap-6'>
                                                <div className='flex gap-7'>
                                                    <div className=''>
                                                        <span className='ml-3'>Điểm đi :</span>
                                                        <div className='border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                            <input
                                                                className='mx-auto text-center font-medium text-lg'
                                                                placeholder='Chọn điểm đến'
                                                                value={diemDi}
                                                                onChange={(e) => setDiemDi(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='ml-3'>Điểm đến :</span>
                                                        <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                            <input className='mx-auto text-center font-medium text-lg' placeholder='Chọn điểm đi'></input>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='ml-3'>Ngày đi :</span>
                                                        <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                            <input className='mx-auto text-center font-medium text-lg' placeholder='Chọn ngày '></input>
                                                        </div>
                                                    </div>
                                                    {isRoundTrip && (
                                                        <div>
                                                            <span className='ml-4'>Ngày về :</span>
                                                            <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px] ml-1'>
                                                                <input className='mx-auto text-center font-medium text-lg' placeholder='Chọn ngày '></input>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                            <div className='flex mt-2'>
                                                <div>
                                                    <span className='ml-2 '>Tìm kiếm gần đây    </span>
                                                    <div className='border border-gray-300 bg-pink-50 flex rounded-lg w-[252px] h-[67px] '>                                                        </div>
                                                </div>
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
