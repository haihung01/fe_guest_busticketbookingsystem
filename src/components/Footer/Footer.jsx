import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import IconLogo from '../../assets/img/386821698_158043907397075_3857281237486244557_n.png'

const Footer = () => {

    return (
        <footer className="bg-white" style={{ backgroundColor: '#F9F2F2' }}>
            <Container className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <Row className="md:flex md:justify-between">
                    <Col className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src={IconLogo} className="h-20 mr-3 rounded-full" alt="FlowBite Logo" />
                            <span className="self-center text-4xl font-semibold whitespace-nowrap text-black">Trip Tix</span>
                        </a>


                        <Col className='mt-5'>
                            <Row className="text-black flex gap-14">
                                <div className=' flex flex-col'>
                                    <span className="mb-4">Địa chỉ: Lô E2a-7, D.D1, Long Thạnh Mỹ, Tp.Thủ Đức,Tp.HCM</span>
                                    <span className="mb-4">Email: hotro@fpt.vn</span>
                                    <span className="mb-4">Điện thoại: 02838386852</span>
                                </div>
                                <div className=' flex flex-col my-auto mt-9'>
                                    <span className="mb-4">Email: hotro@fpt.vn</span>
                                    <span className="mb-4">Fax: 02838386852</span>
                                </div>
                            </Row>

                            <Row className='mt-5'>
                                <div className='flex mt-2 space-x-6 gap-40 items-center'>
                                    <div>
                                        <span className='font-medium text-green-700 text-xl'>TẢI XUỐNG ỨNG DỤNG TRIPTIX</span>
                                        <div className="flex space-x-6 md:mt-7">
                                            <a href="#" className="text-gray-400 hover:text-gray-900 ">
                                                <img src='https://storage.googleapis.com/futa-busline-cms-dev/CH_Play_712783c88a/CH_Play_712783c88a.svg' className='w-28 h-9' alt='' />
                                            </a>
                                            <a href="#" className="text-gray-400 hover:text-gray-900">
                                                <img src='https://storage.googleapis.com/futa-busline-cms-dev/App_Store_60da92cb12/App_Store_60da92cb12.svg' className='w-28 h-9' alt='' />
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <span className='font-medium text-green-700 text-xl'>KẾT NỐI VỚI CHÚNG TÔI</span>
                                        <div className="flex space-x-6 md:mt-5 gap-7 ">
                                            <a href="#" className="text-gray-400 hover:text-gray-900 ">
                                                <img src='https://www.svgrepo.com/show/13642/facebook.svg' className='h-12 w-12 ' alt='' />
                                            </a>
                                            <a href="#" className="text-gray-400 hover:text-gray-900">
                                                <img src='https://www.svgrepo.com/show/157806/instagram.svg' className='h-12 w-12' alt='' />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </Row>
                        </Col>
                    </Col>
                    <Col className="grid grid-cols-2 gap-24 mt-9 sm:grid-cols-2 mr-10">
                        <Row className=''>
                            <h2 className="mb-6 font-medium text-green-700 text-xl uppercase ">TripTix Bus Lines</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium text-base" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Trang chủ</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Về chúng tôi</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Lịch trình</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Tin tức & sự kiện</a>
                                </li>


                            </ul>
                        </Row>
                        <Row className='justify-end d-flex '>
                            <h2 className="mb-6 font-medium text-green-700 text-xl uppercase ">LIÊN KẾT</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Chính sách bảo mật</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">FAQs</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Điều khoản dịch vụ</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Quản lý các đặt phòng</a>
                                </li>
                            </ul>
                        </Row>
                    </Col>
                </Row>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <Row className="px-4 py-6 bg-gray-100 dark:bg-green-800 md:flex md:items-center md:justify-center w-[100%]">
                    <span className="text-sm text-gray-50 dark:text-gray-50 sm:text-center">© 2023 Flowbite™. All Rights Reserved.
                    </span>

                </Row>

            </Container>
        </footer >


    );
};

export default Footer;
