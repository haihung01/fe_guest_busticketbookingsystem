import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import IconAppStore from '../../../assets/icon/AppStore.svg';
import IconCHplay from '../../../assets/icon/CHPlay.svg';
import { Chip, Stack } from '@mui/material';
import axiosClient from '../../../utils/customizeAPI';
import BackDrop from '../../../components/loading/Loading';
import IconLogo from '../../../assets/img/386821698_158043907397075_3857281237486244557_n.png'
const Payment = () => {
    const paymentInfo = useSelector((state) => state.tripReducer.dataPayment);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])
    console.log("paymentInfo", paymentInfo);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handlePayment = async () => {
        try {
            const submitForm = {
                nameGuest: paymentInfo.nameGuest,
                phoneGuest: paymentInfo.phoneGuest,
                emailGuest: paymentInfo.emailGuest,
                idTrip: paymentInfo.idTrip,
                idOnStation: paymentInfo.idonStation,
                idoffStation: paymentInfo.idoffStation,
                seatName: paymentInfo.seatName,
                amountMoneyToRecharge: paymentInfo.amountMoneyToRecharge
            }
            const responsePayment = await axiosClient.post('/payment/booking-guest-url', submitForm)

            if (responsePayment) {
                const url = responsePayment?.data?.data;
                const a = document.createElement('a')
                a.style.display = 'none'
                a.href = url
                a.download = 'ThongKeHoatDong.xlsx'
                document.body.appendChild(a)
                a.click()
                window.URL.revokeObjectURL(url)
            }
        } catch (error) {
            console.log("error payment: ", error);
        }
    };

    return (
        <>
            <section className="home-banner">
                <div>
                    <BackDrop open={loading} />
                    <Row>
                        <Col className=" mt-20">
                            <div className="w-[1200px] p-12 rounded-2xl mx-auto bg-slate-50 border border-gray-200 ">
                                <section>
                                    <div>
                                        <Row className="flex justify-between">
                                            <Col>
                                                <span className="ml-6 text-lg font-medium">Chọn phương thức thanh toán</span>
                                                <div className="flex mt-5 gap-4 ml-6">
                                                    <img
                                                        className="border border-gray-400 h-12 w-12 rounded-lg"
                                                        src="https://downloadlogomienphi.com/sites/default/files/logos/download-logo-vector-vnpayqr-noqr-mien-phi.jpg" />
                                                    <h1 className="my-auto text-lg font-medium">VNPay</h1>
                                                </div>
                                            </Col>

                                            <Col className="w-[345px] h-[556px] bg-gray-100">
                                                {loading ? (
                                                    <Skeleton className="w-[345px] h-[206px] " />
                                                ) : (
                                                    <div className="justify-center items-center text-center">
                                                        <h1 className="text-gray-500 text-lg font-medium">Tổng thanh toán</h1>

                                                        <span className="font-medium text-4xl text-orange-500">{paymentInfo?.amountMoneyToRecharge} VNĐ</span>

                                                        <img
                                                            className="mx-auto w-72 h-72 rounded-full"
                                                            src={IconLogo}
                                                        />
                                                    </div>
                                                )}
                                                <div className="ml-7">
                                                    <h1 className="mt-5 font-medium text-lg text-green-800">Hướng dẫn thanh toán bằng TripTix</h1>
                                                    <tr>
                                                        <li>Mở ứng dụng TripTix trên điện thoại</li>
                                                        <li>Dùng biểu tượng để nạp tiền vào ví</li>
                                                        <li>Thanh toán trực tiếp đến cổng VNPay</li>
                                                    </tr>
                                                </div>
                                            </Col>


                                            <Col>
                                                {loading ? (
                                                    <Skeleton className="w-[345px] h-[206px] " />
                                                ) : (
                                                    <div className="w-[350px] h-[190px] border border-gray-200 rounded-2xl shadow-xl">
                                                        <h1 className="text-2xl font-normal ml-7 mt-3">Thông tin vé</h1>
                                                        <div className='ml-3 mt-3'>
                                                            <div className='flex justify-between'>
                                                                <span className="text-gray-400 font-normal">Tuyến đường: </span>
                                                                <span className='mr-5 font-medium '>{paymentInfo?.stationOn}-{paymentInfo?.stationOff}</span>
                                                            </div>
                                                            <div className='flex mt-2'>
                                                                <span className="text-gray-400 font-normal">Các ghế đã chọn: </span>
                                                                {paymentInfo?.seatName?.map((s) => (
                                                                    <Chip key={s} label={s} sx={{ mr: 1 }} color='info' />
                                                                ))}
                                                            </div>
                                                            <div className='flex justify-between mt-2'>
                                                                <span className="text-gray-400 font-normal">Tổng giá tiền: </span>
                                                                <span className='mr-5 font-normal text-xl text-orange-600'>{paymentInfo?.amountMoneyToRecharge} VNĐ</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {loading ? (
                                                    <Skeleton className="w-[345px] h-[171px]" />
                                                ) : (
                                                    <div className="w-[350px] h-[171px] mt-5 border border-gray-200 rounded-2xl shadow-xl">
                                                        <h1 className="text-2xl font-normal ml-7 mt-3">Thông tin khách hàng</h1>
                                                        <div className='ml-3 mt-3'>
                                                            <div className='flex justify-between'>
                                                                <span className="text-gray-400 font-normal">Tên khách hàng: </span>
                                                                <span className='mr-5 font-medium '>{paymentInfo?.nameGuest}</span>
                                                            </div>
                                                            <div className='flex justify-between mt-2'>
                                                                <span className="text-gray-400 font-normal">Số điện thoại: </span>
                                                                <span className='mr-5 font-medium '>{paymentInfo?.phoneGuest}</span>
                                                            </div>
                                                            <div className='flex justify-between mt-2'>
                                                                <span className="text-gray-400 font-normal">Email: </span>
                                                                <span className='mr-5 font-medium '>{paymentInfo?.emailGuest}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}


                                                <div className='w-[345px] h-[100px] rounded-2xl mt-5  flex gap-10 justify-end'>
                                                    <button onClick={handleOpen} className='w-[112px] h-[32px] border border-gray-300 rounded-2xl flex justify-center text-center items-center text-orange-500'>
                                                        Hủy
                                                    </button>
                                                    <button onClick={handlePayment} className='w-[112px] h-[32px] bg-orange-500 rounded-2xl flex justify-center text-center items-center text-gray-50'>
                                                        Thanh toán
                                                    </button>

                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </section>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // height: 200,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};
export default Payment;