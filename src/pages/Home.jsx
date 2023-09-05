import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Bg_Banner from '../UI/Bg_Banner'
import Banner from '../UI/Banner'

const Home = () => {
    return (
        <>
            <section className="home-banner" >
                <Container>
                    <Row>
                        <Col lg="12">
                            <Bg_Banner />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='choosFrom_wrap'>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h1>choosFrom_wrap</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="banner mt-16">
                <Container >
                    <Row>
                        <Col lg="12" className="">
                            <Banner />
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Home