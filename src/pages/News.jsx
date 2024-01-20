import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import BgBanner from '../UI/bg-banner/Bg_Banner'
import Banner from '../UI/Banner'
import PopularNew from '../UI/NewPageUI/PopularNew'
const News = () => {
    return (
        <>
            {/* <section className='choosFrom_wrap'>
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
            </section> */}
            <section className="banner mt-16">
                <div >
                    <Row>
                        <Col lg="12" className="">
                            {/* <Banner /> */}
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="banner mt-16">
                <div >
                    <Row>
                        <Col lg="12" className="">
                            <PopularNew />
                        </Col>
                    </Row>
                </div>
            </section>
        </>


    )
}

export default News