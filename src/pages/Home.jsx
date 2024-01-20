import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import BgBanner from '../UI/bg-banner/Bg_Banner'
import Banner from '../UI/Banner'
import CardList from '../UI/AdvertisementList'
import Skeleton from "react-loading-skeleton";
import { Alert, Snackbar } from '@mui/material'
import BackDrop from '../components/loading/Loading'

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [openFail, setOpenFail] = useState(false);

    useEffect(() => {
        const status = window.location.href?.split("status");
        if (status[1] === "=success") {
            setOpen(true)
        }
        if (status[1] === "=false") {
            setOpenFail(true)
        }
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, []);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleCloseFail = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenFail(false);
    };

    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Thanh toán thành công
                </Alert>
            </Snackbar>
            <Snackbar open={openFail} autoHideDuration={6000} onClose={handleCloseFail}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Thanh toán thất bại!
                </Alert>
            </Snackbar>
            <section className='bg-Adtech-desk  '>
                <div>
                    <BackDrop open={loading} />
                    <Row>
                        <Col lg="12">
                            <div>
                                <div className='Adtech-desk '>
                                    {loading ? (
                                        <Skeleton className='w-[968.5px] h-[88.5px]' />
                                    ) : (
                                        <div className="w-[968.5px] h-[88.5px] rounded-2xl mx-auto mt-[-30px]  border border-gray-200 shadow-xl">
                                            <img
                                                src='https://platforms.makemytrip.com/contents/a50e89c2-2cd4-4970-a67d-4593e36688cd'
                                                className='rounded-2xl w-[968px] h-[88px]'
                                                alt=''

                                            />
                                        </div>
                                    )}

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section className="banner">
                <div className='' >
                    <Row>
                        <Col lg="12" >
                            {loading ? (
                                [<Skeleton className=" h-[550px]" />]
                            ) : (
                                <Banner />
                            )}
                        </Col>
                    </Row>
                </div>
            </section>

            <section className='mt-2'>
                <div >
                    <Row>
                        <Col lg="12" className="">
                            <CardList />
                        </Col>
                    </Row>
                </div>
            </section>

            <section className='mt-16'>
                <div >
                    <Row>
                        <Col lg="12" className=" h-[550px]">
                            {loading ? (
                                [<Skeleton className=" h-[550px]" />]
                            ) : (
                                <div>
                                    <div>
                                        <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-10">
                                            TRIP TIX BUS LINES - MANG LẠI KỶ NIỆM ĐÁNG NHỚ
                                        </h1>
                                    </div>

                                    <div className="time_sales rounded-lg relative  mt-7">
                                        <div className="w-[1200px]  mx-auto justify-between flex">
                                            <div>
                                                <h1 className="text-blue-900 text-3xl font-bold text-center p-14">
                                                    Thời gian vàng, săn sale ngay! <br />
                                                    Giảm tới 50% giá vé!
                                                </h1>
                                                <h1 className="text-center">
                                                    Tải ứng dụng ngay để sử dụng sản phẩm.
                                                    <br /> Đừng bỏ qua cơ hội săn vé rẽ trong ngày.
                                                </h1>
                                            </div>
                                            <img
                                                alt="img"
                                                src="https://free.vector6.com/wp-content/uploads/2020/04/072-Vector-Viet-Nam-poeqrc006.jpg"
                                                className="w-[600px] h-[470px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                        </Col>
                    </Row>
                </div>
            </section>

        </>
    )
}

export default Home