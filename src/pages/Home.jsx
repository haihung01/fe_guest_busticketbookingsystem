import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Bg_Banner from '../UI/Bg_Banner'

const Home = () => {
    return (
        <section className="home-banner" >
            <Container>
                <Row>
                    <Col lg="12">
                        <Bg_Banner />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home