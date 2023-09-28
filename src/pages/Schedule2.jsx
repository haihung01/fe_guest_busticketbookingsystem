import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import { schedule } from '../data/data';

const Schedule2 = ({ address, route, img }) => {
    return (
        <>
            <section className="home-banner" >
                <Container>
                    <Row>
                        <Col className=' '>
                            <div className="w-[1200px] h-[1050px] p-12  rounded-2xl mx-auto bg-slate-50 border border-gray-200 flex gap-3">
                                <Col className='border border-gray-900 w-[1000px] h-[950px]'>
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

                                </Col>

                                <Col className='border border-gray-900 w-[350px] h-[500px]'>
                                </Col>
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
                                        FUTA BUS LINES - KẾT NỐI FUTA GROUP
                                    </h1>
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

export default Schedule2;