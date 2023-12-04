import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap'

const Contact = () => {
    const [isChecked, setIsChecked] = useState({
        sold: false,
        empty: false,
        selected: false,
    });
    return (
        <>
            <section className="home-banner" >
                <Container>
                    <Row>
                        <h1 className='text-4xl text-center justify-center mt-10'>Liên hệ FUTA EXPRESS</h1>
                        <Col className=' mt-10'>
                            <div className="w-[1200px] h-[750px] p-12  rounded-2xl mx-auto bg-slate-50 border border-gray-200">
                                <section>
                                    <Container>
                                        <Row className='flex gap-9'>
                                            <Col className=''>
                                                <div className='d-flex'>
                                                    <h1 className='font-medium text-3xl'>Trụ sở chính</h1>
                                                    <h1 className='font-medium text-lg'>Công ty CP Dịch vụ chuyển phát nhanh Phương Trang FUTA</h1>

                                                    <ul className='mt-7'>
                                                        <li className='flex gap-2'>
                                                            <img
                                                                className='h-5 w-5'
                                                                src='https://www.svgrepo.com/show/418950/address-location-map.svg' />
                                                            28/36 đường số 7, phường Phúc Thọ
                                                        </li>
                                                        <li className='flex gap-3 mt-3'>
                                                            <img
                                                                className='h-4 w-4'
                                                                src='https://www.svgrepo.com/show/129965/phone.svg' />
                                                            0123456789
                                                        </li>
                                                        <li className='flex gap-2 mt-3'>
                                                            <img
                                                                className='h-5 w-5'
                                                                src='https://www.svgrepo.com/show/507361/mail.svg' />
                                                            nobita@gmail.com
                                                        </li>
                                                        <li className='flex gap-2 mt-3'>
                                                            <img
                                                                className='h-5 w-5'
                                                                src='https://www.svgrepo.com/show/337733/earth.svg' />
                                                            nobitaexpress.vn
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>



                                            <Col className='w-[700px] h-[640px] border border-gray-200 rounded-2xl shadow-xl    '>
                                                <h1 className='ml-6 mt-9 font-medium text-lg '>Gửi thắc mắc - yêu cầu</h1>
                                                <div className='ml-6 flex flex-col mt-3'>
                                                    <div className='flex gap-10'>
                                                        <Col className='d-flex'>
                                                            <span>Họ và tên</span>
                                                            <div className='w-[266px] h-[36px] border border-gray-300 rounded-lg mt-1 relative'>
                                                                <input placeholder='Nhập họ và tên' className=' h-[25px] pl-2 ml-2 pt-2 placeholder-center placeholder-[5px] text-left' />
                                                            </div>
                                                        </Col>

                                                        <Col>
                                                            <span>Điện thoai</span>
                                                            <div className='w-[266px] h-[36px] border border-gray-300 rounded-lg mt-1'>
                                                                <input placeholder='Nhập số điện thoại' className=' h-[25px] pl-2 ml-2 pt-2 placeholder-center placeholder-[5px] text-left' />
                                                            </div>
                                                        </Col>
                                                    </div>
                                                    <div className='flex gap-10 mt-7'>
                                                        <Col>
                                                            <span>Email</span>
                                                            <div className='w-[266px] h-[36px] border border-gray-300 rounded-lg mt-1'>
                                                                <input placeholder='Nhập email' className=' h-[25px] pl-2 ml-2 pt-2 placeholder-center placeholder-[5px] text-left' />
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <span>Địa chỉ</span>
                                                            <div className='w-[266px] h-[36px] border border-gray-300 rounded-lg mt-1'>
                                                                <input placeholder='Nhập địa chỉ ' className=' h-[25px] pl-2 ml-2 pt-2 placeholder-center placeholder-[5px] text-left' />
                                                            </div>
                                                        </Col>
                                                    </div>

                                                    <Col className='mt-7'>
                                                        <span>Tiêu đề</span>
                                                        <div className='w-[574px] h-[36px] border border-gray-300 rounded-lg mt-1'>
                                                            <input placeholder='Tiêu đề' className=' h-[25px] pl-2 ml-2 pt-2 placeholder-center placeholder-[5px] text-left' />
                                                        </div>
                                                    </Col>

                                                    <Col className='mt-7'>
                                                        <span>Nội dung</span>
                                                        <div className='w-[574px] h-[56px] border border-gray-300 rounded-lg mt-1'>
                                                            <input placeholder='Nội dung' className=' h-[35px] pl-2 ml-2 pt-3 placeholder-center placeholder-[5px] text-left' />
                                                        </div>
                                                    </Col>

                                                    <Col>
                                                        <div className="w-[216px] h-[44px] rounded-3xl flex bg-orange-500 mt-20 justify-center  relative text-gray-50">
                                                            <button
                                                                className="font-sans w-[216px] h-[44px]">
                                                                Gửi nội dung
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </section>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </section >

            <section className='mt-16'>
                <Container >
                    <Row>
                        <Col lg="12" className="">
                            <div>
                                <div>
                                    <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-10">
                                        TRIP TIX BUS LINES - MANG LẠI KỶ NIỆM ĐÁNG NHỚ                              </h1>
                                </div>

                                <div className="time_sales rounded-lg relative  mt-7">
                                    <div className='w-[1200px]  mx-auto justify-between flex'>
                                        <div>
                                            <h1 className="text-blue-900 text-3xl font-bold text-center p-14">
                                                All tickets are 50% off now! <br />Don't miss such a deal!
                                            </h1>
                                            <h1 className="text-center">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                <br /> Sed eu feugiat amet, libero ipsum enim pharetra
                                                hac.
                                            </h1>
                                        </div>
                                        <img
                                            src='https://free.vector6.com/wp-content/uploads/2020/04/072-Vector-Viet-Nam-poeqrc006.jpg'
                                            className="w-[600px] h-[470px]" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Contact