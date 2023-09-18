import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import Bg_Banner from '../UI/bg-banner/Bg_Banner'
import Banner from '../UI/Banner'
import CardList from '../UI/AdvertisementList'

const Home = () => {
    return (
        <>

            <section className='choosFrom_wrap'>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div>
                                <div className='btn From_wrap'>
                                    <div className="w-[980.53px] h-[55px] rounded-[30px] mx-auto bg-slate-50 mt-[-25px] shadow-2xl border border-gray-400 ">
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='bg-Adtech-desk '>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div>
                                <div className='Adtech-desk'>
                                    <div className="w-[968.5px] h-[88.5px] rounded-2xl mx-auto bg-slate-50 mt-5  border border-gray-200 ">
                                        <img
                                            src='https://platforms.makemytrip.com/contents/a50e89c2-2cd4-4970-a67d-4593e36688cd'
                                            className='rounded-2xl w-[968px] h-[88px]'
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="banner mt-[-50px]">
                <Container >
                    <Row>
                        <Col lg="12" className="">
                            {/* <Banner /> */}
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='mt-16'>
                <Container >
                    <Row>
                        <Col lg="12" className="">
                            <CardList />
                        </Col>
                    </Row>
                </Container>
            </section>

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

export default Home