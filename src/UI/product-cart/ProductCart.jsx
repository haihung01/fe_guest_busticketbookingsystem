import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Bg_Banner from '../bg-banner/Bg_Banner'

const ProductCart = () => {
    return (
        <>
            <section className="home-banner" >
                <Container>
                    <Row>
                        <Col className='Widget-Section mt-20'>
                            <div className="w-[1200px] h-[900px] p-12  rounded-2xl mx-auto bg-slate-50 shadow-2xl border border-gray-500">
                                <section>
                                    {/* <Container>
                                        <Row>
                                            <Col className='flex align-items-center gap-28  mx-auto w-[876.2px] round-checkbox mt-3'>
                                                <div>
                                                    <input type="checkbox" id="myCheck1" />
                                                    <label for="myCheck1">Một chiều</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="myCheck2" />
                                                    <label for="myCheck2">Khứ hồi</label>
                                                </div>
                                            </Col>

                                            <Col className=' align-items-center  mx-auto w-[798px] h-[200px]'>
                                                <div className='mt-3 flex  gap-4'>
                                                    <div>
                                                        <span className='ml-3'>Điểm đi :</span>
                                                        <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                            <input className='mx-auto text-center font-medium text-lg' placeholder='Chọn điểm đến'></input>
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
                                                </div>

                                                <div className='mt-4'>
                                                    <span className='ml-3'>Tìm kiếm gần đây :</span>
                                                    <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                        <input className='mx-auto text-center font-medium text-lg'></input>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container> */}
                                    <Container>
                                        <Row className='flex gap-5'>
                                            <Col className='w-[700px] h-[336px] bg-slate-400 rounded-2xl'>
                                            </Col>

                                            <Col>
                                                <div className='w-[345px] h-[206px] bg-slate-400 rounded-2xl'>

                                                </div>

                                                <div className='w-[345px] h-[171px] bg-slate-400 mt-5 rounded-2xl'>

                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className='flex gap-5'>
                                            <Col className='w-[700px] h-[200    px] bg-slate-400 rounded-2xl mt-[-40px]'>
                                            </Col>
                                            <Col className='w-[345px] h-[100px] rounded-2xl mt-5  flex gap-10 justify-end'>
                                                <div className='w-[112px] h-[32px] bg-slate-400 rounded-2xl '>

                                                </div>
                                                <div className='w-[112px] h-[32px] bg-slate-400 rounded-2xl '>

                                                </div>
                                            </Col>

                                        </Row>
                                    </Container>
                                </section>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </section></>
    )
}

export default ProductCart