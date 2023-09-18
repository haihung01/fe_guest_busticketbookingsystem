import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import './Bg_Banner.scss';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import '../../data/data.js'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const Bg_Banner = () => {

    const [openOrigin, setOpenOrigin] = useState(false);
    const handleOpenOrigin = () => setOpenOrigin(true);
    const handleCloseOrigin = () => setOpenOrigin(false);

    const [openDestination, setOpenDestination] = useState(false);
    const handleOpenDestination = () => setOpenDestination(true);
    const handleCloseDestination = () => setOpenDestination(false);

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
                                        <Col className='flex align-items-center gap-16  round-checkbox mt-3 '>
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
                                                                placeholder='Chọn điểm đi'
                                                                value={diemDi}
                                                                onChange={(e) => setDiemDi(e.target.value)}
                                                                onClick={handleOpenOrigin}
                                                            />
                                                            <div>
                                                                <Modal
                                                                    open={openOrigin}
                                                                    onClose={handleCloseOrigin}
                                                                    aria-labelledby="modal-modal-title"
                                                                    aria-describedby="modal-modal-description"
                                                                >
                                                                    <Box sx={origin} className='origin rounded-xl'>
                                                                        <Origin />
                                                                    </Box>
                                                                </Modal>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='ml-3'>Điểm đến :</span>
                                                        <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                            <input className='mx-auto text-center font-medium text-lg' placeholder='Chọn điểm đến' value={diemDi}
                                                                onChange={(e) => setDiemDi(e.target.value)}
                                                                onClick={handleOpenDestination} />
                                                            <div>
                                                                <Modal
                                                                    open={openDestination}
                                                                    onClose={handleCloseDestination}
                                                                    aria-labelledby="modal-modal-title"
                                                                    aria-describedby="modal-modal-description"
                                                                >
                                                                    <Box sx={destination} className='rounded-xl'>
                                                                        <Destination />
                                                                    </Box>
                                                                </Modal>
                                                            </div>
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
};

function Origin() {
    return (
        <Container className='mt-[-15px]'>
            <Row >
                <Col className=' ml-[-12px]'>
                    <h5 className='ml-2'>Điểm đi</h5>
                    <div className='w-[332px] h-[67px] border border-gray-300 flex mt-2  rounded-xl'>
                        <input placeholder='Chọn điểm đi' className='ml-2' />
                    </div>
                </Col>

                <Col className='mt-7 ml-[-12px]'>
                    <h1 className='ml-2'>TỈNH/THÀNH PHỐ</h1>
                    <div className='w-[150px] h-[30px] rounded-lg border border-gray-300 mt-2 flex'>
                        <span className='mx-auto'>Tp.Hồ Chí Minh</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

function Destination() {
    return (
        <Container className='mt-[-15px]'>
            <Row >
                <Col className=' ml-[-12px]'>
                    <h5 className='ml-2'>Điểm đến</h5>
                    <div className='w-[332px] h-[67px] border border-gray-300 flex mt-2  rounded-xl'>
                        <input placeholder='Chọn điểm đến' className='ml-2' />
                    </div>
                </Col>

                <Col className='mt-7 ml-[-12px]'>
                    <h1 className='ml-2'>TỈNH/THÀNH PHỐ</h1>
                    <div className='w-[150px] h-[30px] rounded-lg border border-gray-300 mt-2 flex'>
                        <span className='mx-auto'>Tp.Hồ Chí Minh</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


const origin = {
    position: 'absolute',
    top: '42%',
    left: '28.5%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    bgcolor: 'background.paper',
    border: '2px solid #e6e4e4',
    boxShadow: 24,
    p: 4,
    height: 240,

};

const destination = {
    position: 'absolute',
    top: '42%',
    left: '42.5%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    bgcolor: 'background.paper',
    border: '2px solid #e6e4e4',
    boxShadow: 24,
    p: 4,
    height: 240,

};
export default Bg_Banner;
