import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import { schedule } from '../data/data';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const Schedule2 = ({ routes, route, time, disance }) => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <section className="home-banner" >
                <Container>
                    <Row>
                        <Col>
                            <div className="flex w-[1200px] mx-auto mt-10">
                                <div className="w-60">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Address</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Address"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Hồ Chí Minh</MenuItem>
                                            <MenuItem value={20}>Bình Dương</MenuItem>
                                            <MenuItem value={30}>Hà Nội</MenuItem>
                                            <MenuItem value={10}>Hồ Chí Minh</MenuItem>
                                            <MenuItem value={20}>Bình Dương</MenuItem>
                                            <MenuItem value={30}>Hà Nội</MenuItem>
                                            <MenuItem value={10}>Hồ Chí Minh</MenuItem>
                                            <MenuItem value={20}>Bình Dương</MenuItem>
                                            <MenuItem value={30}>Hà Nội</MenuItem>
                                            <MenuItem value={10}>Hồ Chí Minh</MenuItem>
                                            <MenuItem value={20}>Bình Dương</MenuItem>
                                            <MenuItem value={30}>Hà Nội</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                <h1 className="text-4xl self-center px-12">
                                    Lộ trình các tuyến xe bus tại Bình Dương
                                </h1>
                            </div>
                            <div className="w-[1200px] h-[4650px] p-12  rounded-2xl mx-auto bg-slate-50 border border-gray-200 gap-3 mt-10 ">
                                <Row>
                                    <span className='font-medium'>Nhằm hỗ trợ hành khách dễ dàng tra cứu các tuyến xe buýt đang hoạt động tại Bình Dương, dưới đây là một số thông tin giới thiệu lộ trình xe bus tại Bình Dương.</span>
                                    <img
                                        className='rounded-lg mx-auto w-[1100px] h-[650px] mt-7'
                                        src='https://dulichbinhduong.org.vn/storage/travels/90f6ueNJL7ZK6axPbhWaRHCwDPr7KxwPoAfOtizW.jpg' />
                                </Row>

                                <Row className='mt-5'>
                                    {schedule.map((item, index) => (
                                        <Col key={index}>
                                            <span className='font-medium'>1. Tuyến số 01: Thủ Dầu Một – Mỹ Phước</span>
                                            <div className='ml-10 p-4'>
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '0' }}>
                                                    <li style={{ textAlign: 'center' }}>
                                                        <span className='font-medium'>Lộ trình :</span> BX Khách Tỉnh Bình Dương – CMT8 – Cầu Ông Đành – Chợ Cây Dừa – Mũi Tàu – QL13 – Sở Sao – Mỹ Phước.
                                                    </li>
                                                    <li style={{ textAlign: 'center' }}>Thời gian : <span className='font-medium'>5h30 – 19h00</span></li>
                                                    <li style={{ textAlign: 'center' }}>Giãn cách : <span className='font-medium'>15 phút/chuyến</span></li>
                                                </ul>
                                            </div>
                                            <hr className='mt-2' />
                                        </Col>

                                    ))}

                                </Row>



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
                                    <h1 className="text-orange-500 text-2xl font-medium mx-auto text-center mt-10">
                                        TRIP TIX BUS LINES - MANG LẠI KỶ NIỆM ĐÁNG NHỚ
                                    </h1>
                                </div>

                                <div className="time_sales rounded-lg relative  mt-7">
                                    <div className='w-[1200px]  mx-auto justify-between flex'>
                                        <div>
                                            <h1 className="text-blue-900 text-3xl font-bold text-center p-14">
                                                Tất cả các vé hiện đang được giảm giá 50%! <br />Đừng bỏ lỡ một thỏa thuận như vậy!
                                            </h1>
                                            <h1 className="text-center">
                                                Trải nghiệm những chuyến đi thú vị và đầy màu sắc.

                                                <br /> Khám phá những nơi bạn chưa từng đến.
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

export default Schedule2;

{/* <Col className='border border-gray-900 w-[740px] h-[950px]'>
{schedule.map((item, index) => (
    <div key={index} className='flex gap-10 mt-7'>
        <img className='h-[97px] w-[97px] rounded-full' src={item.img} />
        <div className=''>
            <h1 className='font-medium text-lg'>{item.address}</h1>
            <hr className='mt-2 border-t-2 border-gray-300' />
            <Col className='flex gap-1 mt-2'>
                <img src='https://www.svgrepo.com/show/418950/address-location-map.svg' className='w-[17px] h-[23px]' />
                <span className='text-gray-400'>{item.route}</span>
            </Col>
        </div>
    </div>
))}

</Col> */}